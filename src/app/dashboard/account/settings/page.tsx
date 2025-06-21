import { createUser } from "@/app/actions/user";
import UserForm from "@/components/blocks/UserForm";

import React from "react";

async function page() {
  return (
    <div>
      <UserForm action={createUser} />
    </div>
  );
}

export default page;
