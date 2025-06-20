"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmailStatus } from "@/generated/prisma";

export interface EmailLog {
  id: number;
  to: string;
  subject: string;
  body: string;
  status: EmailStatus;
  scheduledAt: Date | null;
  sentAt: Date | null;
  userId: number | null;
  createdAt: Date;
  error: string | null;
}


interface EmailLogTableProps {
  emails: EmailLog[];
}

const EmailLogTable = ({ emails }: EmailLogTableProps) => {
  const [statusFilter, setStatusFilter] = useState<
    "PENDING" | "SENT" | "FAILED" | ""
  >("");

  const filtered = statusFilter
    ? emails.filter((s) => s.status === statusFilter)
    : emails;

  return (
    <div className="p-4">
      <Select onValueChange={(value) => setStatusFilter(value as any)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="PENDING">PENDING</SelectItem>
          <SelectItem value="SENT">SEND</SelectItem>
          <SelectItem value="FAILED">FAILED</SelectItem>
        </SelectContent>
      </Select>

      <Table>
        <TableCaption>All Email Logs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>To</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Scheduled At</TableHead>
            <TableHead>Send At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                No emails found
              </TableCell>
            </TableRow>
          ) : (
            filtered.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.to}</TableCell>
                <TableCell>{s.status}</TableCell>
                <TableCell>
                  {new Date(s?.scheduledAt?.toISOString() || "").toLocaleString()}
                </TableCell>
                <TableCell>{new Date(s.sentAt?.toISOString() || "").toLocaleString()}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmailLogTable;
