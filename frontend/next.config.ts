import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.create.vista.com', 'shutterstock.com'], // Add this line to allow images from this domain
  },
};

export default nextConfig;
