import { z } from 'zod';

import { strapiImageSchema } from './strapiImageSchema';


export const aboutSchema = z.object({
    body: z.string(),
    image: strapiImageSchema,
});
