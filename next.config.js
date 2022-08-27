module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  basePath: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? '/open-geodata-curriculum' : '',
  assetPrefix: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? '/open-geodata-curriculum' : '',
  reactStrictMode: true,
}