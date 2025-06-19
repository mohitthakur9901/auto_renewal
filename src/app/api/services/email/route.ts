import { sendEmailToMembers } from "@/app/actions/services";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("send email to members");

  const result = await sendEmailToMembers();
  return NextResponse.json(result);
}
