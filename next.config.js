/** @type {import('next').NextConfig} */
const path = require('path');

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
}

module.exports = nextConfig