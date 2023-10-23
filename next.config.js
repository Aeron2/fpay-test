/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeCss: false,
  enableBabelRuntime: true,
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "src/Assets",
      "unsplash.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
