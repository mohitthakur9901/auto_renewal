"use client";

import { useState  } from "react";
import { redirect } from "next/navigation";
import { createMember } from "@/app/actions/member";
import { toast } from "sonner";
import MemberRegister from "@/components/blocks/MemberRegister";

export default function MemberPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    joiningDate: undefined as Date | undefined,
    expiryDate: undefined as Date | undefined,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (field: "joiningDate" | "expiryDate", date: Date | undefined) => {
    setFormValues((prev) => ({ ...prev, [field]: date }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("address", formValues.address);
    formData.append("joindate", formValues.joiningDate?.toISOString() || "");
    formData.append("expirydate", formValues.expiryDate?.toISOString() || "");

    setLoading(true);
    const res = await createMember(formData);
    console.log(res);
    
    setLoading(false);

    if (res.success) {
      toast.success("Member registered!");
      setFormValues({
        name: "",
        email: "",
        phone: "",
        address: "",
        joiningDate: undefined,
        expiryDate: undefined,
      });
      redirect("/dashboard/members/list");
    } else {
      toast.error("Failed to register member");
      console.log(res.error);
    }
  };

  return (
    <MemberRegister
      values={formValues}
      loading={loading}
      onChange={handleChange}
      onDateChange={handleDateChange}
      onSubmit={handleSubmit}
    />
  );
}
