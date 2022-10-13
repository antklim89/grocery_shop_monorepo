import { z } from 'zod';

import { featureSchema } from '~/schemas';


export type IFeature = z.infer<typeof featureSchema>
