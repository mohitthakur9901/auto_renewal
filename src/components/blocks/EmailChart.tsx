"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "Email Chart";

interface EmailChartProps {
  EmailData: {
    date: string;
    emailsSent: number;
  }[];
}

export default function EmailChart({ EmailData }: any) {
  return (
    <Card className="w-full shadow-sm border border-muted">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Emails Sent</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Comparison between today and yesterday
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={EmailData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border border-gray-200 rounded-md shadow-md px-4 py-2 text-sm">
                      <p className="font-medium text-gray-900">
                        {payload[0].payload.date}
                      </p>
                      <p className="text-muted-foreground">
                        Emails Sent:{" "}
                        <span className="font-semibold text-indigo-600">
                          {payload[0].payload.emailsSent}
                        </span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="emailsSent"
              stroke="#4f46e5" // Tailwind indigo-600
              fill="#e0e7ff" // Tailwind indigo-100
              strokeWidth={2}
              dot={{ r: 3, stroke: "#4f46e5", strokeWidth: 2, fill: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
