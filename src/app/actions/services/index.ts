"use server";

import client from "@/lib/db";
import { sendEmail } from "@/lib/email/resend";
import { currentUser } from "@clerk/nextjs/server";
// Load environment variables
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

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
          expirydate: member.expirydate,
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

// improve email service
export async function sendEmailtoMember(memberId: number) {
  try {
    const clerkUser = await currentUser();

    const user = await client.user.findFirst({
      where: {
        clerkId: clerkUser?.id,
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

    const member = user.members.find(
      (member) => member.id === Number(memberId) && member.status === "ACTIVE"
    );

    if (!member) {
      return {
        success: false,
        message: "Member not found",
      };
    }

    const emailSentToMembers = await sendEmail({
      to: member.email,
      from: process.env.NEXT_PUBLIC_AUTO_RENEWAL_EMAIL as string,
      dynamicTemplateData: {
        qrCode: user.qrcode,
        address: user.address,
        placeName: user.placeName,
        upiid: user.upiid,
        name: member.name,
        expirydate: member.expirydate,
      },
    });

    if (!emailSentToMembers) {
      return {
        success: false,
        message: "Error While Sending Emails To Members",
      };
    }

    const createEmailLog = await client.emailLog.create({
      data: {
        userId: user.id,
        to: member.email,
        status: "SENT",
        body: "",
        subject: "Auto Renewal",
        sentAt: new Date().toISOString(),
        memberId: member.id,
      },
    });
    if (!createEmailLog) {
      return {
        success: false,
        message: "Error While Creating Email Log",
      };
    }
    return {
      success: true,
      message: "Sent emails to active members",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error While Sending Emails To Members",
      error,
    };
  }
}

export async function sendWhatsAppMessageToAllMembers() {
  try {
    const clerkUser = await currentUser();
    const user = await client.user.findFirst({
      where: {
        clerkId: clerkUser?.id,
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

    const twilioClient = new Twilio(accountSid, authToken);

    if (!user) {
      throw new Error("User not found.");
    }

    const messagePromises = user.members.map((member) => {
      const customBody =
        `Hello ${member.name},\n\n` +
        `Welcome to ${user.placeName}!\n` +
        `📍 Address: ${user.address}\n` +
        `🏷️ QR Code: ${user.qrcode}\n` +
        `🗓️ Membership Expiry: ${new Date(member.expirydate).toLocaleDateString()}\n` +
        `💳 UPI ID: ${user.upiid}\n\n` +
        `If you have any questions, feel free to reach out.\n\n` +
        `- Team ${user.placeName}`;

      return twilioClient.messages.create({
        from: `whatsapp:${twilioPhoneNumber}`,
        to: `whatsapp:${member.phone}`,
        body: customBody,
      });
    });

    // Await all messages
    await Promise.all(messagePromises);

    return {
      success: true,
      message: "WhatsApp messages sent to all members.",
    };
  } catch (error) {
    console.error("Error sending WhatsApp messages:", error);
    return {
      success: false,
      message: "Error While Sending WhatsApp Message To Members",
      error,
    };
  }
}



export async function sendMessageToMember(memberId: number) {
  try {
    const clerkUser = await currentUser();

    const user = await client.user.findFirst({
      where: {
        clerkId: clerkUser?.id,
        isDeleted: false,
      },
      select: {
        qrcode: true,
        placeName: true,
        address: true,
        upiid: true,
        members: {
          where: {
            id: memberId,
          },
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

    if (!user || !user.members || user.members.length === 0) {
      return {
        success: false,
        message: "Member not found or does not belong to this user",
      };
    }

    const member = user.members[0];

    const twilioClient = new Twilio(accountSid, authToken);

    const customBody =
      `Hello ${member.name},\n\n` +
      `Welcome to ${user.placeName}!\n` +
      `📍 Address: ${user.address}\n` +
      `🏷️ QR Code: ${user.qrcode}\n` +
      `🗓️ Membership Expiry: ${new Date(member.expirydate).toLocaleDateString()}\n` +
      `💳 UPI ID: ${user.upiid}\n\n` +
      `If you have any questions, feel free to reach out.\n\n` +
      `- Team ${user.placeName}`;

    await twilioClient.messages.create({
      from: twilioPhoneNumber,
      to: member.phone,
      body: customBody,
    });

    return {
      success: true,
      message: `Message sent to ${member.name}`,
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      success: false,
      message: "Error While Sending Message to Member",
      error,
    };
  }
}
