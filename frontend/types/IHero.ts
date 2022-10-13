import { z } from 'zod';

import { heroSchema } from '~/schemas';


export type IHero = z.infer<typeof heroSchema>
