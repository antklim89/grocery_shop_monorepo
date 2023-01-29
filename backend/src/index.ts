import { Strapi } from '@strapi/strapi';

import { generateData } from './generateData';


export default {
    register(/* { strapi }*/) { /** */ },
    async bootstrap({ strapi }: {strapi: Strapi}) {
        await generateData(strapi);
    },
};


