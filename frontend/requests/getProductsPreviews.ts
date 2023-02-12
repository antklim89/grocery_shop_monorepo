import { paginationSchema, productPreviewsSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


type ProductsPreviewResponse = components['schemas']['ProductListResponse'];


export async function getProductsPreviews(query: Record<string, unknown> = {}) {
    const data = await api.get('products', { searchParams: {
        'populate': 'images, country, category',
        'pagination[pageSize]': 10,
        ...query,
    } }).json<ProductsPreviewResponse>();

    const products = await productPreviewsSchema.parseAsync(data);

    const pagination = await paginationSchema.parseAsync(data);

    return { products, pagination };
}
