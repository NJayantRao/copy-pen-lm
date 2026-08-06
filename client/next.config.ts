import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${apiUrl}/api/auth/:path*`,
      },
      {
        source: "/api/workspaces/:path*",
        destination: `${apiUrl}/api/workspaces/:path*`,
      },
      {
        source: "/api/workspaces",
        destination: `${apiUrl}/api/workspaces`,
      },
      {
        source: "/api/memory/:path*",
        destination: `${apiUrl}/api/memory/:path*`,
      },
      {
        source: "/api/memory",
        destination: `${apiUrl}/api/memory`,
      },
    ];
  },
};

export default nextConfig;
