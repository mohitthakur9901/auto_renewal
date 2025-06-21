import {
  totalEmailSent,
  totalActiveMembers,
  totalInactiveMembers,
  totalMembers,
} from "@/app/actions/dashboard";
import { Separator } from "@/components/ui/separator";
import EmailChart from "@/components/blocks/EmailChart";
import WhatsAppChart from "@/components/blocks/WhatsAppChart";
import React from "react";

async function page() {
  const emailData = await totalEmailSent();
  const activeMembers = await totalActiveMembers();
  const inactiveMembers = await totalInactiveMembers();
  const members = await totalMembers();

  return (
    <div className="p-4 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-muted text-foreground dark:bg-neutral-800 dark:text-white rounded-md p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-lg sm:text-xl font-semibold">Active Members</div>
          <div className="text-3xl sm:text-4xl font-bold">
            {activeMembers?.data}
          </div>
        </div>

        <div className="bg-muted text-foreground dark:bg-neutral-800 dark:text-white rounded-md p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-lg sm:text-xl font-semibold">
            Inactive Members
          </div>
          <div className="text-3xl sm:text-4xl font-bold">
            {inactiveMembers?.data}
          </div>
        </div>

        <div className="bg-muted text-foreground dark:bg-neutral-800 dark:text-white rounded-md p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-lg sm:text-xl font-semibold">Total Members</div>
          <div className="text-3xl sm:text-4xl font-bold">{members?.data}</div>
        </div>
      </div>

      <Separator />

      {/* Email Chart */}
      <div className="email-chart  rounded-xl shadow-sm border p-4">
        <EmailChart EmailData={emailData} />
      </div>

      <Separator />

      {/* WhatsApp Chart */}
      <div className="whats-app-chart  rounded-xl shadow-sm border p-4">
        <WhatsAppChart WhatsAppData={[]} />
      </div>

      {/* Placeholder for Members Chart */}
      <div className="members-chart  rounded-xl shadow-sm border p-4 text-center text-muted-foreground">
        Members chart coming soon...
      </div>
    </div>
  );
}

export default page;
