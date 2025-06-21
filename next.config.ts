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
};

export default nextConfig;
