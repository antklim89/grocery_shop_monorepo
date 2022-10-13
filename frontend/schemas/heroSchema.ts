import { z } from 'zod';

import { strapiImageSchema } from './strapiImageSchema';


export const heroSchema = z.object({
    title: z.string(),
    text: z.string(),
    image: strapiImageSchema,
});
