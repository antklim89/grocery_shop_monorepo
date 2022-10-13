import { aboutSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


export type AboutResponse = components['schemas']['AboutResponse']


export async function getAbout() {
    const { data } = await api.get<AboutResponse>('/about', { params: { populate: 'image' } });

    const about = await aboutSchema.parseAsync(data.data?.attributes);

    return about;
}
