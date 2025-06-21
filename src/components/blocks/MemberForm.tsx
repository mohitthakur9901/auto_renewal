"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface MemberFormProps {
  member: {
    name: string;
    email: string;
    phone: string;
    address: string;
    joiningDate: Date;
    expiryDate: Date;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onDateChange: (
    field: "joiningDate" | "expiryDate",
    date: Date | undefined,
  ) => void;
}

function MemberForm({
  member,
  onChange,
  onSubmit,
  onDateChange,
}: MemberFormProps) {
  const form = useForm({
    defaultValues: {
      name: member.name,
      email: member.email,
      phone: member.phone,
      address: member.address,
      joiningDate: member.joiningDate.toISOString().split("T")[0],
      expiryDate: member.expiryDate.toISOString().split("T")[0],
    },
  });
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openExpiry, setOpenExpiry] = React.useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="bg-gray p-8 rounded-2xl shadow-sm hover:shadow-md transition-all max-w-4xl mx-auto space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Edit Member Details
        </h2>

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={() => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  name="name"
                  defaultValue={member.name}
                  onChange={onChange}
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  name="email"
                  defaultValue={member.email}
                  onChange={onChange}
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={() => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Phone
              </FormLabel>
              <FormControl>
                <Input
                  name="phone"
                  defaultValue={member.phone}
                  onChange={onChange}
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={() => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Address
              </FormLabel>
              <FormControl>
                <Textarea
                  name="address"
                  defaultValue={member.address}
                  onChange={
                    onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
                  }
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Joining Date */}
          <FormField
            control={form.control}
            name="joiningDate"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Joining Date
                </FormLabel>
                <FormControl>
                  <Popover open={openJoin} onOpenChange={setOpenJoin}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between rounded-xl text-left"
                      >
                        {member.joiningDate ? (
                          member.joiningDate.toISOString().split("T")[0]
                        ) : (
                          <span className="text-gray-400">Select date</span>
                        )}
                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={member.joiningDate}
                        onSelect={(date) => {
                          onDateChange("joiningDate", date);
                          setOpenJoin(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Expiry Date */}
          <FormField
            control={form.control}
            name="expiryDate"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Expiry Date
                </FormLabel>
                <FormControl>
                  <Popover open={openExpiry} onOpenChange={setOpenExpiry}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between rounded-xl text-left"
                      >
                        {member.expiryDate ? (
                          member.expiryDate.toISOString().split("T")[0]
                        ) : (
                          <span className="text-gray-400">Select date</span>
                        )}
                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={member.expiryDate}
                        onSelect={(date) => {
                          onDateChange("expiryDate", date);
                          setOpenExpiry(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pt-6 flex justify-center md:justify-end">
          <Button
            type="submit"
            className="px-10 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            Update Member
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default MemberForm;
