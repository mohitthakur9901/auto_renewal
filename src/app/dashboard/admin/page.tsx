import {
  TotalEmails,
  TotalWhatsApp,
  TotalActiveMembers,
  TotalActiveUsers,
  TotalInactiveMembers,
  TotalInactiveUsers,
  TotalActiveSubscriptions,
  TotalInactiveSubscriptions,
  TotalSubscriptions,
} from "@/app/actions/admin";
import ServiceChart from "@/components/blocks/admin/ServicesChart";
import { StatsBarChart } from "@/components/blocks/admin/StatBarChart";
import SubscriptionChart from "@/components/blocks/admin/SubscriptionChart";

import React from "react";

async function page() {
  const activeMembers = await TotalActiveMembers();
  const activeUsers = await TotalActiveUsers();
  const inactiveMembers = await TotalInactiveMembers();
  const inactiveUsers = await TotalInactiveUsers();
  const subscriptions = await TotalSubscriptions();
  const activeSubscriptions = await TotalActiveSubscriptions();
  const inactiveSubscriptions = await TotalInactiveSubscriptions();
  const emails = await TotalEmails();
  const whatsapp = await TotalWhatsApp();

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Users", count: activeUsers },
          { label: "Active Members", count: activeMembers },
          { label: "Inactive Members", count: inactiveMembers },
          { label: "Inactive Users", count: inactiveUsers },
        ].map(({ label, count }) => (
          <div
            key={label}
            className="bg-muted text-foreground dark:bg-neutral-800 dark:text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {label}
            </p>
            <p className="text-4xl font-bold">{count}</p>
          </div>
        ))}
      </div>

      <div className="chart-view mt-6">
        <StatsBarChart
          activeUsers={activeUsers}
          inactiveUsers={inactiveUsers}
          activeMembers={activeMembers}
          inactiveMembers={inactiveMembers}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <SubscriptionChart
          total={subscriptions}
          active={activeSubscriptions}
          inactive={inactiveSubscriptions}
        />
        <ServiceChart emails={emails} whatsapp={whatsapp} />
      </div>
    </div>
  );
}

export default page;
