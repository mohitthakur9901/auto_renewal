"use server";
import client from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { startOfToday, startOfYesterday } from "date-fns";

export async function totalEmailSent() {
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

    const todayEmails = await client.emailLog.findMany({
      where: {
        userId: user?.id,
        status: "SENT",
        createdAt: {
          gte: startOfToday(),
        },
      },
    });
    const yesterday = await client.emailLog.findMany({
      where: {
        userId: user?.id,
        status: "SENT",
        createdAt: {
          gte: startOfYesterday(),
          lt: startOfToday(),
        },
      },
    });

    return {
      success: true,
      message: "Email logs fetched successfully",
      data: [
        {
          date: "Today",
          emailSent: todayEmails.length,
        },
        {
          date: "Yesterday",
          emailSent: yesterday.length,
        },
      ],
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}
export async function totalWhatsAppSent() {
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

    const whatsAppLog = await client.whatsAppLog.findMany({
      where: {
        userId: user?.id,
        status: "SENT",
      },
    });

    return {
      success: true,
      message: "Email logs fetched successfully",
      data: whatsAppLog,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}

export async function totalActiveMembers() {
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


    const members = await client.member.count({
      where: {
        createdBy: user?.id,
        isDeleted: false,
        status: "ACTIVE",
      },
    });

    return {
      success: true,
      message: "Total members fetched successfully",
      data: members,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}
export async function totalInactiveMembers() {
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

    const members = await client.member.count({
      where: {
        createdBy: user?.id,
        isDeleted: false,
        status: "INACTIVE",
      },
    });

    return {
      success: true,
      message: "Total members fetched successfully",
      data: members,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}

export async function totalMembers() {
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

    const members = await client.member.count({
      where: {
        createdBy: user?.id,
        isDeleted: false,
      },
    });

    return {
      success: true,
      message: "Total members fetched successfully",
      data: members,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}

