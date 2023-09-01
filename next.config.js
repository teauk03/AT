/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

const nextConfig = {
    experimental : {
        serverActions : true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        fiber: false,
        sourceMap: false,
        outputStyle: 'compressed',
    },
    images: {
        domains: ['i.namu.wiki', 'www.konami.com'],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /data-test\//,
            loader: 'ignore-loader',
    });
        return config;
    }
}

module.exports = nextConfig