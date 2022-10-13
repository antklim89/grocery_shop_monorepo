import { z } from 'zod';

import { authSchema } from '~/schemas';


export type IAuthResponse = z.infer<typeof authSchema>
