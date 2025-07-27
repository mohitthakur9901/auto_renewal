"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { sendMessageToMember } from "@/app/actions/services";
import { toast } from "sonner";

export function SendWhatsButton({ memberId }: { memberId: number }) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            onClick={() => {
                startTransition(async () => {
                    const res = await sendMessageToMember(memberId);
                    if (!res.success) {
                      
                        toast.error("Failed to send Message");
                    } else {
                        toast.success("Message sent successfully");
                    }
                });
            }}
            disabled={isPending}
        >
            {isPending ? "Sending..." : "Send Message"}
        </Button>
    );
}