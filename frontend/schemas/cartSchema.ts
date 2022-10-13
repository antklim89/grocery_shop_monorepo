import { z } from 'zod';


export const productCartSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    discount: z.number(),
    unit: z.string(),
});

export const cartSchema = z.object({
    qty: z.number(),
    product: productCartSchema,
});
