import { z } from 'zod';

import { paginationSchema } from '~/schemas';


export type IPagination = z.infer<typeof paginationSchema>
