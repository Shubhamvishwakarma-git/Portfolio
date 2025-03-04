/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Fixes image loading issue on GH Pages
    },
    basePath: "/Portfolio", // Change this to your repo name
    assetPrefix: "/Portfolio/", // Change this to your repo name
  };
  
  export default nextConfig;
  