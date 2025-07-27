"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import Image from "next/image";

function UserForm({ action }: { action: (formData: FormData) => void }) {
  const [previewImage, setPreviewImage] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form
      action={action}
      className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-md space-y-6 border"
    >

      <div className="space-y-2 flex flex-col items-center justify-center">
        <Label htmlFor="qrcode">QR Code</Label>
        
        {/* Hidden File Input */}
        <input
          type="file"
          name="qrcode"
          accept="image/*"
          required
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />

        {/* Image Preview or Placeholder */}
        <div
          className="w-32 h-32 border rounded-md overflow-hidden cursor-pointer bg-gray-100 flex items-center justify-center"
          onClick={handleImageClick}
        >
          {previewImage ? (
            <Image
              src={URL.createObjectURL(previewImage)}
              alt="QR Code Preview"
              width={128}
              height={128}
              className="object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm">Click to upload</span>
          )}
        </div>
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
