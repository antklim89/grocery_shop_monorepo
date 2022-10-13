import { z } from 'zod';

import { productAttributes } from './productSchema';


export const productPreviewAttributes = productAttributes.omit({
    description: true,
});

export const productPreviewDataSchema = z.object({
    id: z.number(),
    attributes: productPreviewAttributes,
});


export const productPreviewSchema = z.object({
    data: productPreviewDataSchema,
}).transform(({ data: { attributes, id } }) => ({ ...attributes, id }));


export const productPreviewsSchema = z.object({
    data: productPreviewDataSchema.array(),
}).transform(({ data }) => data.map(({ id, attributes }) => ({ ...attributes, id })));
