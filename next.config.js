/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Cwm6ctmvxF",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
