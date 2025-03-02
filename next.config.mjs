/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shopify.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://epione.vn/:path*',
            },
        ];
    }
};

export default nextConfig;