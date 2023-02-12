import { AUTH_TOKEN_NAME } from '~/constants';
import { authSchema } from '~/schemas';
import { paths } from '~/swagger';
import { api, setCookie } from '~/utils';


export type LoginResponse = paths['/auth/local']['post']['responses']['200']['content']['application/json'];
export type LoginBody = paths['/auth/local']['post']['requestBody']['content']['application/json'];


export async function login(body: LoginBody) {
    const data = await api.post('auth/local', { json: body }).json<LoginResponse>();

    const authData = await authSchema.parseAsync(data);
    setCookie(AUTH_TOKEN_NAME, authData.jwt);

    return authData;
}
