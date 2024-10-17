/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['res.cloudinary.com'], // Add Cloudinary domain here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
      },
    ],
  },
  // output: 'export', 
};

export default nextConfig;
