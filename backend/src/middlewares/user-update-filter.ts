import { MiddlewareFactory } from '@strapi/strapi/lib/middlewares';


const middleware: MiddlewareFactory = () => {
    return async (ctx, next) => {
        if (ctx.url.startsWith('/api/users/') && ctx.method === 'PUT') {
            const {
                username, email, name, surname, address, phone,
            } = ctx.request.body;
            ctx.request.body = {};
            if (username) ctx.request.body.username = username;
            if (email) ctx.request.body.email = email;
            if (name) ctx.request.body.name = name;
            if (surname) ctx.request.body.surname = surname;
            if (address) ctx.request.body.address = address;
            if (phone) ctx.request.body.phone = phone;
        }
        await next();
    };
};

export default middleware;
