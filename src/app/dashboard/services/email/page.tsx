import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { currentUser } from "@clerk/nextjs/server";
import client from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sendEmailtoMember } from "@/app/actions/services";
import { SendEmailButton } from "@/components/blocks/EmailButton";

async function page() {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  const user = await client.user.findFirst({
    where: {
      clerkId: clerkUser?.id,
    },
  });

  const members = await client.member.findMany({
    where: {
      createdBy: user?.id,
    },
  });
  return (
    <div className="p-4">
      <Table>
        <TableCaption>Send Email to Members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead className="w-[100px]">Phone</TableHead>
            <TableHead className="w-[100px]">Address</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell className="max-w-[120px] truncate whitespace-nowrap">
                {member.address}
              </TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>
                {/*  button  */}
                <SendEmailButton memberId={member.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default page;
