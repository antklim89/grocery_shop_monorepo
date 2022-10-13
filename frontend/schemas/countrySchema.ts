import { z } from 'zod';


export const countryAttributes = z.object({
    name: z.string(),
});

export const countryDataSchema = z.object({
    id: z.number(),
    attributes: countryAttributes,
});

export const countrySchema = z.object({
    data: countryDataSchema,
}).transform(({ data: { attributes, id } }) => ({ ...attributes, id }));

export const countriesSchema = z.object({
    data: countryDataSchema.array(),
}).transform(({ data }) => data.map(({ attributes, id }) => ({ ...attributes, id })));
