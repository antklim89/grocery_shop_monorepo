import { AxiosError } from 'axios';

import { productSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


type ProductResponse = components['schemas']['ProductResponse'];


export async function getProduct(id: number) {
    try {
        const data = await api.get(`products/${id}`, {
            searchParams: {
                populate: 'images, country, category',
            },
        }).json<ProductResponse>();

        const product = await productSchema.parseAsync(data);

        return product;
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) return null;
        if (error instanceof Error) console.error(error.message);
        return null;
    }
}
