


import { currentUser } from '@clerk/nextjs/server'
import client from "@/lib/db";
import MemberForm from '@/components/blocks/MemberForm';
import MemberWrapper from '@/components/blocks/MemberWrapper';

async function page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const clerkUser = await currentUser();
    if (!clerkUser) {
        return null
    }

    const user = await client.user.findFirst({
        where: {
            clerkId: clerkUser?.id
        }
    })

    const members = await client.member.findFirst(({
        where: {
            id: id,
            isDeleted: false
        }
    }));
     if (!members) return <div>Member not found</div>;


   
    return (
     <MemberWrapper
      id={members.id}
      member={{
        address: members.address,
        email: members.email,
        expiryDate: members.expirydate,
        joiningDate: members.joindate,
        name: members.name,
        phone: members.phone,
      }}
    />
    )
}

export default page