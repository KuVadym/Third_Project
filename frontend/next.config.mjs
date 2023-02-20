/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "trello-members.s3.amazonaws.com",
      "media.licdn.com",
    ],
  },
};

export default nextConfig;
