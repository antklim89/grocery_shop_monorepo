import { z } from 'zod';

import { cartSchema } from '~/schemas';


export type ICart = z.infer<typeof cartSchema>
