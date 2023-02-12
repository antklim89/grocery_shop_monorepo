import { aboutSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


export type AboutResponse = components['schemas']['AboutResponse']


export async function getAbout() {
    const data = await api.get('about', { searchParams: { populate: 'image' } }).json<AboutResponse>();

    const about = await aboutSchema.parseAsync(data.data?.attributes);

    return about;
}
