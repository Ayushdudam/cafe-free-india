const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/cafe-free-india' : '',
  images: {
    unoptimized: isGithubPages ? true : false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  ...(isGithubPages
    ? {}
    : {
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
      }),
};

export default nextConfig;
