import React from 'react'


import { ScrollArea } from "@/components/ui/scroll-area"
import { SubscriptionType } from '@/generated/prisma'

interface SusbcriptiontableProps {
  id: number
  userId: number
  subscriptionType: SubscriptionType
  startDate: Date
  endDate: Date
  amount: number
  isActive: boolean
}
interface SubscriptionTableProps {
  subscriptions: SusbcriptiontableProps[];
}

const SubscriptionTable: React.FC<SubscriptionTableProps> = ({ subscriptions }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">All Subscriptions</h2>
      <ScrollArea className="h-[400px]">
        {subscriptions.map((sub) => (
          <div key={sub.id} className="border-b py-2 px-4">
            <p><strong>User ID:</strong> {sub.userId}</p>
            <p><strong>Type:</strong> {sub.subscriptionType}</p>
            <p><strong>Start:</strong> {new Date(sub.startDate).toLocaleDateString()}</p>
            <p><strong>End:</strong> {new Date(sub.endDate).toLocaleDateString()}</p>
            <p><strong>Amount:</strong> ₹{sub.amount}</p>
            <p><strong>Status:</strong> {sub.isActive ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default SubscriptionTable