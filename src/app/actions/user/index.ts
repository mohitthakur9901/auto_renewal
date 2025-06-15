"use server";
import client from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { UserSchema, User } from "./schema";

export async function createUser(phone: string, upiid: string) {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }
    console.log(user);
    
    const data = UserSchema.safeParse({
      username: user.firstName + " " + user.lastName,
      email: user.emailAddresses[0].emailAddress,
      phone: phone,
      upiid: upiid,
    });
    if (!data.success) {
      return {
        message: "Validation Failed",
        errors: data.error.flatten().fieldErrors,
      };
    }
    const userData = data.data;

    const existingUser = await client.user.findUnique({
      where: {
        clerkId: user?.id,
      },
    });
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const createdUser = await client.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        upiid: userData.upiid,
        clerkId: user?.id,
      },
    });

    return {
      success: true,
      message: "User created successfully",
      data: createdUser,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}
