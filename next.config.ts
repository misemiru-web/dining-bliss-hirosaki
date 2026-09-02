import type { NextConfig } from "next";

const repositoryName = "dining-bliss-hirosaki";
const isProjectPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isProjectPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
