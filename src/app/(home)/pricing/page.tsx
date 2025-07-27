import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

function Page() {
  return (
    <section className="py-12 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Pricing that Grows with Your Community
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Built for membership platforms that need email + WhatsApp messaging, automation, and visibility.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
          {/* Growth Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium">Growth</CardTitle>
              <span className="my-3 block text-2xl sm:text-3xl font-semibold text-primary">
                ₹1500 / mo
              </span>
              <CardDescription className="text-sm sm:text-base">
                For teams managing up to 200 members
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Up to 7 Admins",
                  "Track up to 500 Members",
                  "200 Emails / mo",
                  "200 WhatsApp Messages / mo",
                  "Automated Reminders & Alerts",
                  "Basic Analytics Dashboard",
                  "Email & Chat Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href="#">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Scale Plan */}
          <Card className="flex flex-col border border-primary shadow-md">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-medium">Scale</CardTitle>
              <span className="my-3 block text-2xl sm:text-3xl font-semibold text-primary">
                ₹4000 / mo
              </span>
              <CardDescription className="text-sm sm:text-base">
                Best for larger teams with high-volume messaging
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  "Up to 15 Admins",
                  "Unlimited Members",
                  "1,000 Emails / mo",
                  "1,000 WhatsApp Messages / mo",
                  "Advanced Automations",
                  "Custom Member Tags & Filters",
                  "Priority Support & Reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="#">Start Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Page;
