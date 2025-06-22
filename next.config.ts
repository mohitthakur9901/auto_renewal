import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "ik.imagekit.io",
      "img.clerk.com",
      "images.clerk.dev",
      "res.cloudinary.com",
    ],
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
    Resend_API_KEY: process.env.RESEND_API_KEY!,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY!,
    DATABASE_URL: process.env.DATABASE_URL!,
  },
};

export default nextConfig;
