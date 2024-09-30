/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add these lines
  distDir: "build",
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
