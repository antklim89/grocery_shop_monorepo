import { countriesSchema } from '~/schemas';
import { components } from '~/swagger';
import { api } from '~/utils';


export type CountryResponse = components['schemas']['CountryListResponse']


export async function getCounties() {
    const data = await api.get('countries').json<CountryResponse>();

    const country = await countriesSchema.parseAsync(data);

    return country;
}
