/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/zohoverify/verifyforzoho.html',
        destination: '/zohoverify/verifyforzoho.html',
      },
    ];
  },
};

export default nextConfig;
