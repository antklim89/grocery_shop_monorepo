import { z } from 'zod';


const imageAttributesSchema = z.object({
    id: z.number(),
    attributes: z.object({
        url: z.string(),
        placeholder: z.string(),
    }),
});


export const strapiImageSchema = z.object({
    data: imageAttributesSchema,
}).transform(({ data: { attributes, id } }) => ({ ...attributes, id }));


export const strapiImagesSchema = z.object({
    data: imageAttributesSchema.array(),
}).transform(({ data }) => data.map(({ attributes, id }) => ({ ...attributes, id })));
