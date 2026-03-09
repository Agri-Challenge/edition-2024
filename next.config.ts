import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web-24",
  assetPrefix: "/web-24",
  images: { unoptimized: true },
};

export default nextConfig;