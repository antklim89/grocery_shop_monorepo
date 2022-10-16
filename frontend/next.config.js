module.exports = {
    reactStrictMode: true,
    compress: true,
    images: {
        domains: [
            new URL(process.env.NEXT_PUBLIC_API_URL).host,
            '192.168.90.19',
            'localhost',
        ],
    },
};

