import { featuresSchema } from '~/schemas';
import { paths, components } from '~/swagger';
import { api } from '~/utils';


export type FeatureQuery = NonNullable<paths['/features']['get']['parameters']>['query']
export type FeatureResponse = components['schemas']['FeatureListResponse']


export async function getFeatures() {
    const query = {
        populate: 'image',
    } satisfies FeatureQuery;
    const data = await api.get('features', { searchParams: query }).json<FeatureResponse>();

    const feature = await featuresSchema.parseAsync(data);

    return feature;
}
