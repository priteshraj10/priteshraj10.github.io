/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/priteshraj10.github.io' : '',
  assetPrefix: isProd ? '/priteshraj10.github.io/' : '',
};

export default nextConfig;
