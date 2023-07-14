import { resolve } from 'path';


const database = () => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: resolve(process.cwd(), 'database/data.db'),
        },
        useNullAsDefault: true,
    },
});

export default database;
