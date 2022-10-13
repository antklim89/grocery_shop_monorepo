import { z } from 'zod';

import { userSchema } from '~/schemas';


export type IUser = z.infer<typeof userSchema>
