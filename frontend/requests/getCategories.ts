import { categoriesSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


export type CategoryResponse = components['schemas']['CategoryListResponse']


export async function getCategories() {
    const { data } = await api.get<CategoryResponse>('/categories');

    const category = await categoriesSchema.parseAsync(data);

    return category;
}
