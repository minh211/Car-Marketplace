const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['i.pravatar.cc']
    },
    swcMinify: true,
    webpack: config => {
        config.resolve.modules.push(path.resolve('./'));
        return config;
    }
};

module.exports = nextConfig;
