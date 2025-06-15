

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { currentUser } from "@clerk/nextjs/server";

import client from "@/lib/db";
async function page() {
  const user = await currentUser();
  if (!user) {
    return null

  }
  const members = await client.member.findMany({
      where: {
        createdBy: user?.id as unknown as number
      }
    })


return (
  <div className="p-4">
    <Table>
      <TableCaption>All Members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Joining Date</TableHead>
          <TableHead>Expiry Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <ScrollArea className="max-h-[500px]">
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.address}</TableCell>
              <TableCell>
                {new Date(member.joindate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(member.expirydate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(member.expirydate) > new Date()
                  ? "Active"
                  : "Expired"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>
            Total: {members.length} member{members.length !== 1 ? "s" : ""}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
)

}
export default page