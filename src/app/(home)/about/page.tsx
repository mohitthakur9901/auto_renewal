import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Simplify and automate your recurring membership management.
          </h2>
          <div className="space-y-6 max-w-prose">
            <p>
              Tailark is built for creators, gym owners, clubs, and community builders who rely on recurring payments. Manage your members, automate renewals, and never miss a payment again.
            </p>
            <p>
              <span className="font-bold">Send smart alerts and reminders</span> to keep members engaged and informed. Tailark helps you focus on growth — while we handle the operations.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
