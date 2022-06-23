/** @type {import('next').NextConfig} */

const API_KEY = 'c36f93ac62d42e110425fd7987353e63';

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
