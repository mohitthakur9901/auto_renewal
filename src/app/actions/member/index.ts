"use server";

import { currentUser } from "@clerk/nextjs/server";
import { NewMemberSchema, NewMember } from "./schema";
import client from "@/lib/db";
import { EmailStatus, MemberStatus } from "@/generated/prisma";

export async function createMember(formData: FormData) {
  const clerkUser = await currentUser();

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    joindate: formData.get("joindate"),
    expirydate: formData.get("expirydate"),
  };

  const validation = NewMemberSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Validation Failed",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data = validation.data;

  try {
    const user = await client.user.findFirst({
      where: { clerkId: clerkUser?.id },
    });

    if (!user) {
      return {
        success: false,
        message: "Authenticated user not found in DB.",
      };
    }

    const existingMember = await client.member.findFirst({
      where: {
        email: data.email,
      },
    });

    if (existingMember) {
      if (existingMember.isDeleted) {
        const updated = await client.member.update({
          where: { id: existingMember.id },
          data: {
            isDeleted: false,
            status: "ACTIVE",
            name: data.name,
            phone: data.phone,
            address: data.address,
            joindate: data.joindate,
            expirydate: data.expirydate,
          },
        });
        return {
          success: true,
          message: "Member reactivated successfully.",
          member: updated,
        };
      }

      return {
        success: false,
        message: "A member with this email already exists.",
      };
    }

    const member = await client.member.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        joindate: data.joindate,
        expirydate: data.expirydate,
        createdBy: user.id,
      },
    });

    return {
      success: true,
      message: "Member created successfully.",
      member,
    };
  } catch (error) {
    console.error("createMember error:", error);

    return {
      success: false,
      message: "Something went wrong while creating member.",
      error: error,
    };
  }
}

export async function deleteMember(memberId: number) {
  try {
    const member = await client.member.update({
      where: {
        id: memberId,
        isDeleted: false,
      },
      data: {
        isDeleted: true,
        status: "INACTIVE",
      },
    });
    if (!member) {
      return {
        success: false,
        message: "Member not found",
      };
    }
    if (member) {
      return {
        success: true,
        message: "Member deleted successfully",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}

export async function updateMemberStatus(memberId: number, status: string) {
  try {
    const member = await client.member.update({
      where: {
        id: memberId,
        isDeleted: false,
      },
      data: {
        status: {
          set: status as MemberStatus,
        },
      },
    });
    if (!member) {
      return {
        success: false,
        message: "Member not found",
      };
    }
    return {
      success: true,
      message: "Member status updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While updating member",
      error,
    };
  }
}

export async function updateMember(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const joindate = formData.get("joindate") as string;
    const expirydate = formData.get("expirydate") as string;

    const member = await client.member.update({
      where: {
        id: Number(id),
        isDeleted: false,
      },
      data: {
        name,
        email,
        phone,
        address,
        joindate,
        expirydate,
      },
    });
    if (!member) {
      return {
        success: false,
        message: "Member not found",
      };
    }
    if (member) {
      return {
        success: true,
        message: "Member updated successfully",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error While updating member",
      error,
    };
  }
}

export async function searchMember(query: string) {
  try {
    const clerUser = await currentUser();
    const user = await client.user.findFirst({
      where: {
        clerkId: clerUser?.id,
        isDeleted: false,
      },
    });

    const members = await client.member.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { phone: { contains: query, mode: "insensitive" } },
        ],
        isDeleted: false,
        createdBy: user?.id as unknown as number,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    return {
      success: true,
      message: "Member searched successfully",
      data: members,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While searching member",
      error,
    };
  }
}

export async function EmailsSentToMembers(query: EmailStatus) {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    const user = await client.user.findFirst({
      where: {
        clerkId: clerkUser.id,
        isDeleted: false,
      },
    });

    const members = await client.member.findMany({
      where: {
        createdBy: user?.id,
        EmailLog: {
          some: {
            status: query,
          },
        },
      },
      include: {
        EmailLog: {
          where: {
            status: query,
          },
        },
      },
    });

    return {
      success: true,
      message: "Member searched successfully",
      data: members,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While searching member",
      error,
    };
  }
}
