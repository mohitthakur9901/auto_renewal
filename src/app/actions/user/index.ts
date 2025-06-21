"use server";

import client from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { UserSchema, User } from "./schema";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryReturnResponse {
  secure_url: string;
  public_id: string;
}
export async function createUser(formData: FormData) {
  try {
    console.log("formData", formData);

    const clerkUser = await currentUser();

    if (!clerkUser) {
      return null;
    }

    const phone = formData.get("phone")?.toString();
    const upiid = formData.get("upiid")?.toString();
    const address = formData.get("address")?.toString();
    const placeName = formData.get("placeName")?.toString();

    const qrcode = formData.get("qrcode") as File;

    if (!qrcode) {
      return {
        success: false,
        message: "Please select a file",
      };
    }

    // Save the file to /public/uploads
    const buffer = Buffer.from(await qrcode.arrayBuffer());
    const result = await new Promise<CloudinaryReturnResponse>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as CloudinaryReturnResponse);
          },
        );
        uploadStream.end(buffer);
      },
    );

    if (!result) {
      throw new Error("Failed to upload file");
    }
    // if user exisit then update user

    const user = await client.user.create({
      data: {
        clerkId: clerkUser?.id,
        address: address || "",
        placeName: placeName || "",
        phone: phone || "",
        upiid: upiid || "",
        qrcode: result.secure_url,
        email: clerkUser.emailAddresses[0].emailAddress,
        // does not working
        username: clerkUser.firstName + "_" + clerkUser.lastName,
        isDeleted: false,
      },
    });

    return {
      success: true,
      message: "User created successfully",
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      error,
    };
  }
}

export async function updateUser(user: User) {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return null;
    }

    const existingUser = await client.user.findFirst({
      where: {
        clerkId: clerkUser?.id,
      },
    });
    if (!existingUser) {
      return {
        success: false,
        message: "User not found",
      };
    }

    const updatedUser = await client.user.update({
      where: {
        clerkId: clerkUser?.id,
      },
      data: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        upiid: user.upiid,
        modifiedAt: new Date(),
        isDeleted: false,
      },
    });
    if (!updatedUser) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While updating user",
      error,
    };
  }
}

export async function deleteUser(id: string) {
  try {
    const deleteUser = await client.user.update({
      where: {
        id: id as unknown as number,
      },
      data: {
        isDeleted: true,
      },
    });
    if (!deleteUser) {
      return {
        success: false,
        message: "User not found",
      };
    }
    if (deleteUser) {
      return {
        success: true,
        message: "User deleted successfully",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error While deleting user",
      error,
    };
  }
}

export async function getCurrentUser() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return null;
    }
    const user = await client.user.findFirst({
      where: {
        clerkId: clerkUser?.id,
        isDeleted: false,
      },
    });
    return {
      success: true,
      message: "User fetched successfully",
      data: {
        ...user,
        clerkUser,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While getting user",
      error,
    };
  }
}
