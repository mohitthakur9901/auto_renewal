"use server";

import client from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function IsAdmin() {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return false;
  }
  const user = await client.user.findUnique({
    where: {
      clerkId: clerkUser.id,
      role: "ADMIN",
    },
  });

  if (!user) {
    return false;
  }
  return true;
}

export async function getAdmin() {
  const admin = await client.user.findFirst({
    where: {
      role: "ADMIN",
    },
  });
  return admin;
}

export async function getAllUsers() {
  const users = await client.user.findMany();
  return users;
}

export async function getAllMembers() {
  const members = await client.member.findMany();
  return members;
}

export async function getAllEmailLogs() {
  const services = await client.emailLog.findMany();
  return services;
}

export async function getAllWhatsAppLogs() {
  const emails = await client.emailLog.findMany();
  return emails;
}

export async function getAllSubscriptions() {
  const subscriptions = await client.subscription.findMany({
    select: {
      id: true,
      userId: true,
      subscriptionType: true,
      startDate: true,
      endDate: true,
      amount: true,
      isActive: true,
    },
  });
  return subscriptions;
}

export async function TotalActiveUsers() {
  const users = await client.user.count({
    where: {
      isDeleted: false,
    },
  });
  return users;
}

export async function TotalActiveMembers() {
  const members = await client.member.count({
    where: {
      isDeleted: false,
    },
  });
  return members;
}

export async function TotalInactiveMembers() {
  const members = await client.member.count({
    where: {
      isDeleted: true,
    },
  });
  return members;
}

export async function TotalInactiveUsers() {
  const users = await client.user.count({
    where: {
      isDeleted: false,
    },
  });
  return users;
}

export async function TotalSubscriptions() {
  const subscriptions = await client.subscription.count();
  return subscriptions;
}

export async function TotalActiveSubscriptions() {
  const subscriptions = await client.subscription.count({
    where: {
      isActive: true,
    },
  });
  return subscriptions;
}

export async function TotalInactiveSubscriptions() {
  const subscriptions = await client.subscription.count({
    where: {
      isActive: false,
    },
  });
  return subscriptions;
}

export async function TotalEmails() {
  const emails = await client.emailLog.count();
  return emails;
}

export async function TotalWhatsApp() {
  const whatsapp = await client.whatsAppLog.count();
  return whatsapp;
}
