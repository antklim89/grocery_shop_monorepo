import { z } from 'zod';

import { categorySchema } from './categorySchema';
import { countrySchema } from './countrySchema';
import { strapiImagesSchema } from './strapiImageSchema';


export const productAttributes = z.object({
    category: categorySchema,
    country: countrySchema,
    name: z.string(),
    description: z.string(),
    price: z.number(),
    discount: z.number(),
    unit: z.string(),
    createdAt: z.string(),
    images: strapiImagesSchema,
});

export const productDataSchema = z.object({
    id: z.number(),
    attributes: productAttributes,
});


export const productSchema = z.object({
    data: productDataSchema,
}).transform(({ data: { attributes, id } }) => ({ ...attributes, id }));


export const productsSchema = z.object({
    data: productDataSchema.array(),
}).transform(({ data }) => data.map(({ attributes, id }) => ({ ...attributes, id })));
