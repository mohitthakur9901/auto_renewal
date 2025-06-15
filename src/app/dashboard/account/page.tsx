"use client";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import UserForm from "@/components/blocks/UserForm";
import { createUser } from "@/app/actions/user";

const Page = () => {
  const { user } = useUser();

  const [formValues, setFormValues] = useState({
    phone: "",
    upiid: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await createUser(formValues.phone, formValues.upiid);
    console.log(res);

    setLoading(false);
  };

  if (!user) return null;

  return (
    <UserForm
      firstName={user.firstName || ""}
      lastName={user.lastName || ""}
      email={user.emailAddresses[0]?.emailAddress || ""}
      imageUrl={user.imageUrl || ""}
      phone={formValues.phone}
      upiid={formValues.upiid}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default Page;
