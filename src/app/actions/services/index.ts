"use server";

import client from "@/lib/db";
import { sendEmail } from "@/lib/email/resend";
import { currentUser } from "@clerk/nextjs/server";
import corn from "node-cron";

export async function sendEmailToMembers() {

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
      select: {
        id: true,
        qrcode: true,
        placeName: true,
        address: true,
        upiid: true,
        members: {
          select: {
            id: true,
            name: true,
            phone: true,
            address: true,
            email: true,
            joindate: true,
            expirydate: true,
            status: true,
          },
        },
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    const activeMembers = user.members.filter(
      (member) => member.status === "ACTIVE"
    );


    

    const emailSentToMembers = activeMembers.map((member) => {
      sendEmail({
        to: member.email,
        from: process.env.NEXT_PUBLIC_AUTO_RENEWAL_EMAIL as string,
        dynamicTemplateData: {
          qrCode: user.qrcode,
          address: user.address,
          placeName: user.placeName,
          upiid: user.upiid,
          name: member.name,
        },
      });
    });

    await Promise.allSettled(emailSentToMembers);

    return {
      success: true,
      message: `Sent emails to ${emailSentToMembers.length} active members`,
    };
    
  } catch (error) {
    return {
      success: false,
      message: "Error While Sending Emails To Members",
      error,
    };
  }
}
