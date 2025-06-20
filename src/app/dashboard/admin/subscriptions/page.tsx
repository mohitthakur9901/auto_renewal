import { getAllSubscriptions } from '@/app/actions/admin';
import SubscriptionTable from '@/components/blocks/admin/Susbcriptiontable'
import React from 'react'

async function page() {
  const subscriptions = await getAllSubscriptions();
  return (
    <div className="all-subscriptions">
      <SubscriptionTable subscriptions={subscriptions} />
    </div>
  )
}

export default page