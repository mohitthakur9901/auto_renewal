import { currentUser } from "@clerk/nextjs/server";
import client from "@/lib/db";
import MemberWrapper from "@/components/blocks/MemberWrapper";
type Params = Promise<{ id: number }>

export default async function Page({ params }: { params: Params }) {

  const { id } = await params;
  if (isNaN(id)) return <div>Invalid ID</div>;

  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  const user = await client.user.findFirst({
    where: {
      clerkId: clerkUser?.id,
    },
  });

  const members = await client.member.findFirst({
    where: {
      id: id,
      isDeleted: false,
    },
  });
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
  );
}


