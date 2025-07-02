/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // You can add trusted image domains here if you use <Image />
  },
};

module.exports = nextConfig;
