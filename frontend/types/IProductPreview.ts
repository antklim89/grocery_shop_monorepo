import { z } from 'zod';

import { productPreviewSchema } from '~/schemas/productPreviewSchema';


export type IProductPreview = z.infer<typeof productPreviewSchema>
