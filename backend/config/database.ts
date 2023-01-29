
export default ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('PG_HOST'),
            port: env.int('PG_PORT', 5432),
            database: env('PG_DATABASE'),
            user: env('PG_USER', 'postgres'),
            password: env('PG_PASSWORD'),
        },
        debug: false,
        useNullAsDefault: true,
    },
});
