import { featuresSchema } from '~/schemas';
import { paths, components } from '~/swagger';
import { api } from '~/utils';


export type FeatureQuery = paths['/features']['get']['parameters']['query']
export type FeatureResponse = components['schemas']['FeatureListResponse']


export async function getFeatures() {
    const query: FeatureQuery = {
        populate: 'image',
    };
    const { data } = await api.get<FeatureResponse>('/features', { params: query });

    const feature = await featuresSchema.parseAsync(data);

    return feature;
}
