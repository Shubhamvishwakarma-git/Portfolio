/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
    basePath: "/Portfolio", // Your GitHub repo name
    assetPrefix: "/Portfolio",
  };
  
  module.exports = nextConfig;
  
  