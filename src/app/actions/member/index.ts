"use server";
import { currentUser } from "@clerk/nextjs/server";
import { NewMemberSchema, NewMember } from "./schema";
import client from "@/lib/db";

export async function createMember(formData: FormData) {
  const user = await currentUser();
  

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
      message: "Validation Failed",
      errors: validation.error.flatten().fieldErrors,
    };
  }
  const data = validation.data;

  try {
    const member = await client.member.create({
      data: {
        email: data.email,
        name: data.name,
        phone: data.phone,
        address: data.address,
        joindate: data.joindate,
        expirydate: data.expirydate,
        createdBy: user?.id as unknown as number,
      },
    });
    return {
      success: true,
      message: "Member Created Successfully",
      member,
    };

  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}
