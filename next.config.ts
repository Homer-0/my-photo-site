/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/chapters/people",
        destination: "/chapters/presence",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
