import { z } from 'zod';

import { productSchema } from '~/schemas';


export type IProduct = z.infer<typeof productSchema>
