
import { EmailsSentToMembers } from '@/app/actions/member'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { SendEmailButton } from '@/components/blocks/EmailButton';
import { SendWhatsButton } from '@/components/blocks/WhatsAppButton';
async function page() {
    const { data, success } = await EmailsSentToMembers("SENT");

    if (!success) {
        return null;
    }

    return (
        <div className="p-4">
            {/* status selector */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-600">Emails Already Sent</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead className="w-[100px]">Email</TableHead>
                        <TableHead className="w-[100px]">Phone</TableHead>
                        <TableHead className="w-[100px]">Address</TableHead>
                        <TableHead className="w-[100px]">Expiry Date</TableHead>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!data ? "No Data Found" : data.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell className="font-medium">{member.name}</TableCell>
                            <TableCell className="font-medium">{member.email}</TableCell>
                            <TableCell className="font-medium">{member.phone}</TableCell>
                            <TableCell className="font-medium max-w-[120px] truncate whitespace-nowrap">{member.address}</TableCell>
                            <TableCell className="font-medium">{member.expirydate.toLocaleDateString()}</TableCell>
                            <TableCell className="font-medium">{member.EmailLog.length > 0 ? member.EmailLog[0].status : "Not Sent"}</TableCell>
                            <TableCell className="font-medium">
                                <SendEmailButton memberId={member.id} />
                            </TableCell>
                            <TableCell className="font-medium">
                                <SendWhatsButton memberId={member.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default page