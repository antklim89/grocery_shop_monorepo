import { z } from 'zod';


export const categoryAttributes = z.object({
    name: z.string(),
});

export const categoryDataSchema = z.object({
    id: z.number(),
    attributes: categoryAttributes,
});

export const categorySchema = z.object({
    data: categoryDataSchema,
}).transform(({ data: { attributes, id } }) => ({ ...attributes, id }));

export const categoriesSchema = z.object({
    data: categoryDataSchema.array(),
}).transform(({ data }) => data.map(({ attributes, id }) => ({ ...attributes, id })));
