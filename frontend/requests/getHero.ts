import { heroSchema } from '~/schemas';
import { paths, components } from '~/swagger';
import { api } from '~/utils';


export type HeroResponse = components['schemas']['HeroResponse']
export type HeroQuery = paths['/hero']['get']['parameters']['query']


export async function getHero() {
    const query: HeroQuery = {
        populate: 'image',
    };
    const { data } = await api.get<HeroResponse>('/hero', { params: query });

    const hero = await heroSchema.parseAsync(data.data?.attributes);

    return hero;
}
