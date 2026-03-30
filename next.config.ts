import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  output: "standalone",
  allowedDevOrigins: ["100.68.178.26"],
};

export default nextConfig;

