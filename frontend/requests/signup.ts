import { authSchema } from '~/schemas';
import { paths } from '~/swagger';
import { api } from '~/utils';


export type SignupResponse = paths['/auth/local/register']['post']['responses']['200']['content']['application/json'];
export type SignupBody = paths['/auth/local/register']['post']['requestBody']['content']['application/json'];


export async function signup(body: SignupBody) {
    const { data } = await api.post<SignupResponse>('/auth/local/register', body);

    const authData = await authSchema.parseAsync(data);

    return authData;
}
