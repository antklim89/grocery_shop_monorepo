import { z } from 'zod';

import { strapiImageSchema } from './strapiImageSchema';


const featureAttributes = z.object({
    title: z.string(),
    text: z.string(),
    image: strapiImageSchema,
});

const featureDataSchema = z.object({
    id: z.number(),
    attributes: featureAttributes,
});


export const featureSchema = z.object({
    data: featureDataSchema,
}).transform((image) => ({ ...image.data.attributes, id: image.data.id }));


export const featuresSchema = z.object({
    data: featureDataSchema.array(),
}).transform((images) => images.data.map((image) => ({ ...image.attributes, id: image.id })));
