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
import React from "react";

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string | null;
  joindate: Date;
  expirydate: Date;
  status: string;
  isDeleted: boolean;
}

interface MemberTableProps {
  members: Member[];
}

function MemberTable({ members }: MemberTableProps) {
  const visibleMembers = members.filter((m) => !m.isDeleted);

  return (
    <div className="p-4">
      <Table>
        <TableCaption>All Members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Joining Date</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell className="max-w-[120px] truncate">
                {member.email}
              </TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell className="max-w-[100px] truncate">
                {member.address}
              </TableCell>
              <TableCell>
                {new Date(member.joindate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(member.expirydate).toLocaleDateString()}
              </TableCell>
              <TableCell>{member.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>
              Total: {visibleMembers.length} member
              {visibleMembers.length !== 1 ? "s" : ""}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default MemberTable;
