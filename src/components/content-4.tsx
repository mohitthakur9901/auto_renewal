import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            A complete toolkit for managing memberships at scale
          </h2>
          <div className="space-y-6">
            <p>
              Our platform helps you handle everything — from member signups and 
              recurring payments to real-time alerts and retention analytics — all 
              in one place.
            </p>
            <p>
              Built for gyms, clubs, coworking spaces, and communities, 
              <span className="font-bold"> it gives you full control over the membership lifecycle</span>.
              Automate what matters and focus on delivering value to your members.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#features">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
