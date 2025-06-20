"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface SubscriptionChartProps {
  total: number;
  active: number;
  inactive: number;
}

const COLORS = ["#10B981", "#EF4444"]; // Green and Red

const SubscriptionChart: React.FC<SubscriptionChartProps> = ({
  total,
  active,
  inactive,
}) => {
  const data = [
    { name: "Active", value: active },
    { name: "Inactive", value: inactive },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-muted p-4 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold text-center mb-4">Subscriptions Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4 text-muted-foreground">
        Total Subscriptions: <strong>{total}</strong>
      </div>
    </div>
  );
};

export default SubscriptionChart;
