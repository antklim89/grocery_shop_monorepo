import { z } from 'zod';

import { userSchema } from './userSchema';


export const authSchema = z.object({
    jwt: z.string(),
    user: userSchema,
});
