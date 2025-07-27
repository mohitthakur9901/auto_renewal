import { Activity, Bell, CreditCard, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                Designed for Membership-Based Businesses
              </h2>
              <p className="mt-6 text-muted-foreground">
                Manage your members, automate recurring payments, and stay connected —
                all from one powerful platform.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Users className="size-5" />
                Member management dashboard
              </li>
              <li>
                <CreditCard className="size-5" />
                Recurring billing & payment automation
              </li>
              <li>
                <Bell className="size-5" />
                Smart alerts & renewal reminders
              </li>
              <li>
                <Activity className="size-5" />
                Insights & performance analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
