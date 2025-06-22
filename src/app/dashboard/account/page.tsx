import { getCurrentUser } from "@/app/actions/user";
import Image from "next/image";
import React from "react";

async function page() {
  const response = await getCurrentUser();

  if (!response?.success || !response.data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">
          No user found or an error occurred.
        </p>
      </div>
    );
  }

  const { data } = response;
  const { clerkUser, email, phone, upiid, address, placeName, qrcode } = data;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl shadow-lg bg-white space-y-6 md:space-y-0 flex flex-col md:flex-row md:gap-8">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Welcome {clerkUser?.firstName}
        </h1>

        {clerkUser && (
          <div>
            <Image
              src={clerkUser.imageUrl}
              alt="User Profile"
              width={200}
              height={200}
              className="rounded-lg border w-full max-w-[200px] object-cover"
            />
          </div>
        )}

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Name:</strong> {clerkUser.firstName} {clerkUser.lastName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>UPI ID:</strong> {upiid}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Place Name:</strong> {placeName}
          </p>
        </div>
      </div>

      {qrcode && (
        <div className="flex-1 space-y-2 text-sm text-gray-700">
          <p className="font-semibold text-lg">QR Code:</p>
          <Image
            src={qrcode}
            alt="User QR Code"
            width={300}
            height={300}
            className="rounded-lg border w-full max-w-[300px] object-contain"
          />
        </div>
      )}
    </div>

  );
}

export default page;
