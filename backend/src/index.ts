import { generateData } from './generateData';


export default {
    register(/* { strapi }*/) { /** */ },
    async bootstrap() {
        await generateData();
    },
};


