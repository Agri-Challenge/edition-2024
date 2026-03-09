import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/agri-challenge-website";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
