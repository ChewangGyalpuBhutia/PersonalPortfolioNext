import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    domains: ['tailwindui.com'],
    unoptimized: true, // Disable Image Optimization API
  },
  output: 'export',
  basePath: isProd ? '/PersonalPortfolioNext' : '',
  assetPrefix: isProd ? '/PersonalPortfolioNext/' : '',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Remove interest-cohort
          },
        ],
      },
    ];
  },
};

export default nextConfig;