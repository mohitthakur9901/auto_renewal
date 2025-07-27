import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using your custom button

function Page() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-4xl font-semibold mb-6">Let’s Talk</h1>
        <p className="text-muted-foreground mb-8">
          Have questions, feedback, or want to collaborate? We’d love to hear from you. Reach out or book a call — we’ll get back to you quickly.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild variant="default" size="lg">
            <Link
              href="https://cal.com/mohit-thakur/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 15-min Call
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="mailto:mohitthakur9901@gmail.com">Email Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Page;
