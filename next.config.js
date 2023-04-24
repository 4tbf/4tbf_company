/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const path = require('path');

const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
}

module.exports = nextConfig
