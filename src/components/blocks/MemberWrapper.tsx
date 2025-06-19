"use client";

import { useState } from "react";
import MemberForm from "@/components/blocks/MemberForm";
import { updateMember } from "@/app/actions/member"; 
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 

export default function MemberWrapper({ member, id }: { member: any, id: number }) {
  const [formState, setFormState] = useState({
    name: member.name,
    email: member.email,
    phone: member.phone,
    address: member.address,
    joiningDate: new Date(member.joiningDate),
    expiryDate: new Date(member.expiryDate),
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (field: "joiningDate" | "expiryDate", date: Date | undefined) => {
    setFormState((prev) => ({
      ...prev,
      [field]: date ?? new Date(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", String(id));
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone);
    formData.append("address", formState.address);
    formData.append("joindate", formState.joiningDate.toISOString());
    formData.append("expirydate", formState.expiryDate.toISOString());

    const res = await updateMember(formData);
    if (res?.success ) {
      toast.success("Member updated successfully");
      router.push("/dashboard/members/list"); 
    } else {
      toast.error("Failed to update");
    }
  };


  return (
    <MemberForm
      member={formState}
      onChange={handleChange}
      onDateChange={handleDateChange}
      onSubmit={handleSubmit}
    />
  );
}
