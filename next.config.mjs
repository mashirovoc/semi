import withPWA from 'next-pwa';


/** @type {import('next').NextConfig} */

const pwa = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
});

const nextConfig = pwa({
    images: {
        remotePatterns: [
            {
                protocol: 'https', hostname: 'placehold.jp',
            },
            {
                protocol: 'https', hostname: 'pbs.twimg.com',
            },
        ],
    },

})



export default nextConfig;
