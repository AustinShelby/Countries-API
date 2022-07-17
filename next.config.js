/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/countries",
      destination: "/countries.json",
    },
    {
      source: "/countries/:iso",
      destination: "/:iso.json",
    },
  ],
};

module.exports = nextConfig;
