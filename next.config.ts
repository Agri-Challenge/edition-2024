import type { NextConfig } from "next";

const repoBasePath = "/agri-challenge-website"; // must match Pages URL path exactly

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: { unoptimized: true },
};

export default nextConfig;