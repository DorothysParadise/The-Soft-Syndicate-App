/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["yourdomain.com"], // replace with real domains if using <Image />
  },
};

module.exports = nextConfig;
