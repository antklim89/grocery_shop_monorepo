import { AUTH_TOKEN_NAME } from '~/constants';
import { authSchema } from '~/schemas';
import { paths } from '~/swagger';
import { api, setCookie } from '~/utils';


export type SignupResponse = paths['/auth/local/register']['post']['responses']['200']['content']['application/json'];
export type SignupBody = paths['/auth/local/register']['post']['requestBody']['content']['application/json'];


export async function signup(body: SignupBody) {
    const data = await api.post('auth/local/register', { json: body }).json<SignupResponse>();

    const authData = await authSchema.parseAsync(data);
    setCookie(AUTH_TOKEN_NAME, authData.jwt);

    return authData;
}
