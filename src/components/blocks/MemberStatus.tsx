"use client";

import { useState } from "react";
import { updateMemberStatus } from "@/app/actions/member";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner"; // or your toast library

export function MemberStatusSelect({
  memberId,
  currentStatus,
}: {
  memberId: number;
  currentStatus: string;
}) {
  const [status, setStatus] = useState(currentStatus);

  const handleChange = async (value: string) => {
    const res = await updateMemberStatus(memberId, value);
    if (res.success) {
      setStatus(value);
      toast.success("Status updated");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Select defaultValue={status} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ACTIVE">Active</SelectItem>
        <SelectItem value="INACTIVE">Inactive</SelectItem>
      </SelectContent>
    </Select>
  );
}
