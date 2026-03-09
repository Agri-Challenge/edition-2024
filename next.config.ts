import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/agri-challenge-website",
  assetPrefix: "/agri-challenge-website",
  images: { unoptimized: true },
};

export default nextConfig;