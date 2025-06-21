// components/member/SendEmailButton.tsx
"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { sendEmailtoMember } from "@/app/actions/services";
import { toast } from "sonner";

export function SendEmailButton({ memberId }: { memberId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => {
        startTransition(async () => {
          const res = await sendEmailtoMember(memberId);
          if (!res.success) {
            console.error(res.message);
            toast.error("Failed to send email");
          } else {
            toast.success("Email sent successfully");
          }
        });
      }}
      disabled={isPending}
    >
      {isPending ? "Sending..." : "Send Email"}
    </Button>
  );
}
