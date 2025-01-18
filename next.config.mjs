/** @type {import('next').NextConfig} */
const nextConfig = {
    // proxy
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://epione.vn/:path*',
            },
        ];
    },
};

export default nextConfig;
