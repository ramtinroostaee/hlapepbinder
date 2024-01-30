/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/hlapepbinder',
    basePath: "/hlapepbinder",
    output: "export",
};

module.exports = nextConfig
