import { getCurrentUser } from "@/app/actions/user";
import Image from "next/image";
import React from "react";

async function page() {
  const response = await getCurrentUser();

  if (!response?.success || !response.data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">No user found or an error occurred.</p>
      </div>
    );
  }

  const { data } = response;
  const { clerkUser, email, phone, upiid, address, placeName, qrcode } = data;

  return (
    <div className="max-w-2xl mx-auto mt-5  p-2 rounded-2xl shadow-md space-y-6 flex ">
     <div className="">
       <h1 className="text-3xl font-bold text-gray-800">Welcome {clerkUser?.firstName}</h1>
      {clerkUser && (
        <div>

          <Image
            src={clerkUser.imageUrl}
            alt="User QR Code"
            width={250}
            height={400}
            className="rounded-lg border"
          />
        </div>
      )}
      <div className="space-y-2">
        <p><strong>Name:</strong> {clerkUser.firstName} {clerkUser.lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>UPI ID:</strong> {upiid}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Place Name:</strong> {placeName}</p>
      </div>
     </div>
      {qrcode && (
        <div>
          <p><strong>QR Code:</strong></p>

          <Image
            src={qrcode}
            alt="User QR Code"
            width={250}
            height={400}
            className="rounded-lg border"
          />
        </div>
      )}

    </div>
  );
}

export default page;
