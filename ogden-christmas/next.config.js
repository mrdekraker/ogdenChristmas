/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/grades/first',
        destination: '/grades/first',
      },
    ];
  },
};

module.exports = nextConfig;