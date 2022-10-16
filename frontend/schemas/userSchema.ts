import { z } from 'zod';


export const userSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    surname: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
