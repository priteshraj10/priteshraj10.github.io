/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is not at the root, set basePath and assetPrefix
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
