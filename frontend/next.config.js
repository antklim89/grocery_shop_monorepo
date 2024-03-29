
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    compress: true,
    images: {
        domains: [new URL(process.env.NEXT_PUBLIC_API_URL).hostname],
    },
    staticPageGenerationTimeout: 240,
};
