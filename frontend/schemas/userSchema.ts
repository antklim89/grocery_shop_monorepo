import { z } from 'zod';


export const userSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    name: z.string(),
    surname: z.string(),
    address: z.string(),
    phone: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
