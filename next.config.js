/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');
module.exports = withSass();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
