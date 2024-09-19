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
  output: 'export', // If needed, you can keep this commented or uncomment it
};

export default nextConfig;
