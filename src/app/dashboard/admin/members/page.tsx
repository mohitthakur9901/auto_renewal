import { getAllMembers } from '@/app/actions/admin';
import MemberTable from '@/components/blocks/admin/MemberTable';
import React from 'react'

async function page() {

  const members = await getAllMembers();
  return (
    <div className="members-list">
      <p>All Members</p>
      <MemberTable members={members} />
    </div>
  )
}

export default page