/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "trello-members.s3.amazonaws.com"],
  },
};

export default nextConfig;
