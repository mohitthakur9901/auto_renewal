import { sendEmailToMembers } from "@/app/actions/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
  try {
    if (process.env.NODE_ENV === "production") {
      console.log("send email to members");
      const result = await sendEmailToMembers();
      return NextResponse.json(result);
    }

    return NextResponse.json({ message: "Skipped in non-production" });
  } catch (error) {
    console.error("API Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
