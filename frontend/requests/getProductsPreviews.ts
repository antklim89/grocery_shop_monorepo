import { paginationSchema, productPreviewsSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


type ProductsPreviewResponse = components['schemas']['ProductListResponse'];


export async function getProductsPreviews(query: Record<string, unknown> = {}) {
    const { data } = await api.get<ProductsPreviewResponse>('/products', { params: {
        'populate': 'images, country, category',
        'pagination[pageSize]': 3,
        ...query,
    } });

    const products = await productPreviewsSchema.parseAsync(data);

    const pagination = await paginationSchema.parseAsync(data);

    return { products, pagination };
}
