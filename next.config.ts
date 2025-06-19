import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["letsenhance.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
