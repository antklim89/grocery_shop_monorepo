import { z } from 'zod';


export const paginationSchema = z.object({
    meta: z.object({
        pagination: z.object({
            page: z.number().default(1),
            pageSize: z.number().default(1),
            pageCount: z.number().default(1),
            total: z.number().default(1),
        }),
    }),
}).transform(({ meta: { pagination } }) => pagination);
