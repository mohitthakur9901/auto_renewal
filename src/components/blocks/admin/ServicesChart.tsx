"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

interface CommunicationStatsChartProps {
    emails: number;
    whatsapp: number;
}

const ServiceChart: React.FC<CommunicationStatsChartProps> = ({
    emails,
    whatsapp,
}) => {
    const data = [
        { name: "Emails", value: emails },
        { name: "WhatsApp", value: whatsapp },
    ];

    return (
        <div className="w-full max-w-md mx-auto bg-muted p-4 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-4">Communication Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
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

export default ServiceChart;
