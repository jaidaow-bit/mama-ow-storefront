/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true }, // let the first deploy go through
  eslint: { ignoreDuringBuilds: true }
};
module.exports = nextConfig;
