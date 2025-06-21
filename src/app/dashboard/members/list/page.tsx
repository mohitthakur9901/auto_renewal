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
import { MemberStatusSelect } from "@/components/blocks/MemberStatus";
import DeleteAlert from "@/components/blocks/DeleteAlert";
import SearchBar from "@/components/blocks/SearchBar";
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
      {/* search bar  */}
      <SearchBar />
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
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members
            .filter((member) => !member.isDeleted)
            .map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell className="max-w-[120px] truncate whitespace-nowrap">
                  {member.email}
                </TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell className="max-w-[100px] truncate whitespace-nowrap">
                  {member.address}
                </TableCell>
                <TableCell>
                  {new Date(member.joindate).toISOString().split("T")[0]}
                </TableCell>
                <TableCell>
                  {new Date(member.expirydate).toISOString().split("T")[0]}
                </TableCell>
                <TableCell>
                  <MemberStatusSelect
                    currentStatus={member.status}
                    memberId={member.id}
                  />
                </TableCell>
                <TableCell>
                  <Link
                    href={`/dashboard/members/list/${member.id}`}
                    className="bg-blue-400 p-2 rounded-md "
                  >
                    Edit
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteAlert memberId={member.id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>
              Total: {members.filter((member) => !member.isDeleted).length}{" "}
              member{members.length !== 1 ? "s" : ""}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
export default page;
