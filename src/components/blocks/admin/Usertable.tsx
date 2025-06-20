// components/UserTable.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  address: string;
  upiid: string;
  placeName: string;
  isDeleted: boolean;
};

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>All Members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">UserName</TableHead>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead className="w-[100px]">Phone</TableHead>
            <TableHead className="w-[100px]">Address</TableHead>
            <TableHead className="w-[100px]">UPI</TableHead>
            <TableHead className="w-[100px]">Place Name</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell className="font-medium">{user.phone}</TableCell>
              <TableCell className="font-medium">{user.address}</TableCell>
              <TableCell className="font-medium">{user.upiid}</TableCell>
              <TableCell className="font-medium">{user.placeName}</TableCell>
              <TableCell className="font-medium">
                <Select defaultValue={user.isDeleted ? "inactive" : "active"}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {/* update status */}
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
