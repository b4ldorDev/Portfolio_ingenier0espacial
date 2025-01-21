import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio_ingenier0espacial',
  assetPrefix: '/Portfolio_ingenier0espacial/'
};

export default nextConfig;
