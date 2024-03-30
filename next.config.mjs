/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "fakestoreapi.com",
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: "random.imagecdn.app",
                pathname: '**'
            }
            ,
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                pathname: '**'
            }
        ]
    },
};

export default nextConfig;
