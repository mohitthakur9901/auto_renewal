"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface StatsChartProps {
  activeUsers: number;
  inactiveUsers: number;
  activeMembers: number;
  inactiveMembers: number;
}

export const StatsBarChart = ({
  activeUsers,
  inactiveUsers,
  activeMembers,
  inactiveMembers,
}: StatsChartProps) => {
  const data = [
    { name: "Active Users", value: activeUsers },
    { name: "Inactive Users", value: inactiveUsers },
    { name: "Active Members", value: activeMembers },
    { name: "Inactive Members", value: inactiveMembers },
  ];

  return (
    <div className="w-full h-[300px] bg-muted rounded-xl p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
