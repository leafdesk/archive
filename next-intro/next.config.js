/** @type {import('next').NextConfig} */

const API_KEY = process.env.NEXT_APP_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/old/:path',
        destination: '/new/:path',
        permanent: false,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
