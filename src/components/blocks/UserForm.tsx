import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

function UserForm({ action }: { action: (formData: FormData) => void }) {
  return (
    <form
      action={action}
      className="max-w-xl mx-auto mt-10  p-6 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Add New User</h2>

      <div className="space-y-2">
        <Label htmlFor="qrcode">QR Code</Label>
        <Input type="file" name="qrcode" accept="image/*" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input type="text" name="phone" placeholder="Phone" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="upiid">UPI ID</Label>
        <Input type="text" name="upiid" placeholder="UPI ID" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea name="address" placeholder="Address" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="placeName">Place Name</Label>
        <Input type="text" name="placeName" placeholder="Place Name" required />
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}

export default UserForm;
