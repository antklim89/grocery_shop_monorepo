import { z } from 'zod';

import { aboutSchema } from '~/schemas';


export type IAbout = z.infer<typeof aboutSchema>
