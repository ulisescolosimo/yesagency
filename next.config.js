/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactStrictMode: true,
    images: {
      domains: ["yestravel.us", "source.unsplash.com"],
    },
  },
};

module.exports = nextConfig;
