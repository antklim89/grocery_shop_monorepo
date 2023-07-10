import { heroSchema } from '~/schemas';
import { paths, components } from '~/swagger';
import { api } from '~/utils';


export type HeroResponse = components['schemas']['HeroResponse']
export type HeroQuery = NonNullable<paths['/hero']['get']['parameters']>['query']


export async function getHero() {
    const query = {
        populate: 'image',
    } satisfies HeroQuery;
    const data = await api.get('hero', { searchParams: query }).json<HeroResponse>();

    const hero = await heroSchema.parseAsync(data.data?.attributes);

    return hero;
}
