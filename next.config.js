/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  reactStrictMode: true,
});
