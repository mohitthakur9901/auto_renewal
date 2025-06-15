"use client"

import Image from "next/image";
import React from "react";
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserFormProps {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  phone: string;
  upiid: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  firstName,
  lastName,
  email,
  imageUrl,
  phone,
  upiid,
  onSubmit,
  onChange,
  loading,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>

        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src={imageUrl || ""} alt="user image" fill />
              </div>

              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{firstName}</p>
                <p className="text-sm font-medium leading-none">{lastName}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-y-5">
            <div className="w-full">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                name="phone"
                value={phone}
                placeholder="Phone Number"
                className="w-full"
                onChange={onChange}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="upiid">UPI ID</Label>
              <Input
                name="upiid"
                value={upiid}
                placeholder="UPI ID"
                className="w-full"
                onChange={onChange}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
