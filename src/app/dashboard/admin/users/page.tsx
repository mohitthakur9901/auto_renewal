import { getAllUsers } from "@/app/actions/admin";
import UserTable from "@/components/blocks/admin/Usertable";
import React from "react";

async function page() {
  const users = await getAllUsers();

  return (
    <div className="users-list">
      <p>All Users</p>
      <UserTable users={users} />
    </div>
  );
}

export default page;
