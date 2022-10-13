import { z } from 'zod';

import { strapiImageSchema } from '~/schemas/strapiImageSchema';


export type IStrapiImage = z.infer<typeof strapiImageSchema>
