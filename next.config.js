/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            },
        ]
    },
    reactStrictMode: false,
}

module.exports = nextConfig
