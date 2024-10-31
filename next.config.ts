import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
        port: '',
      },
    ],
  },
}
