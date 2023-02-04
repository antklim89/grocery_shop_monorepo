import { resolve } from 'path';


export default ({ env }) => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: resolve(process.cwd(), env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
    },
});
