/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
        source: '/menu',
        destination: '/#from-our-kitchen',
        permanent: true,
      },
      {
        source: '/outlets',
        destination: '/#find-us',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/franchise',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
