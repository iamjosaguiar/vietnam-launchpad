const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vietnamlaunchpad.com' }],
        destination: 'https://www.vietnamlaunchpad.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/vneid-vietnam-digital-id-foreigners',
        destination: '/guides/vneid-vietnam-digital-id-foreigners',
        permanent: true,
      },
    ];
  },
}

module.exports = withNextIntl(nextConfig);