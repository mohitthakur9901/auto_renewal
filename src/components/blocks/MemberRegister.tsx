"use client";

import React from "react";
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";

interface MemberRegisterProps {
  values: {
    name: string;
    email: string;
    phone: string;
    address: string;
    joiningDate?: Date;
    expiryDate?: Date;
  };
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (field: "joiningDate" | "expiryDate", date: Date | undefined) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MemberRegister: React.FC<MemberRegisterProps> = ({
  values,
  loading,
  onChange,
  onDateChange,
  onSubmit,
}) => {
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openExpiry, setOpenExpiry] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl border">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">New Member Registration</CardTitle>
        </CardHeader>

        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Enter full name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="Enter phone number"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={onChange}
                  placeholder="Enter home address"
                />
              </div>

              {/* Joining Date */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="joining-date">Joining Date</Label>
                <Popover open={openJoin} onOpenChange={setOpenJoin}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="justify-between font-normal"
                    >
                      {values.joiningDate
                        ? values.joiningDate.toLocaleDateString()
                        : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={values.joiningDate}
                      onSelect={(date) => {
                        onDateChange("joiningDate", date);
                        setOpenJoin(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Expiry Date */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Popover open={openExpiry} onOpenChange={setOpenExpiry}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="justify-between font-normal"
                    >
                      {values.expiryDate
                        ? values.expiryDate.toLocaleDateString()
                        : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={values.expiryDate}
                      onSelect={(date) => {
                        onDateChange("expiryDate", date);
                        setOpenExpiry(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={loading} className="px-6">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default MemberRegister;
