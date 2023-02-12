import { AUTH_TOKEN_NAME } from '~/constants';
import { paths } from '~/swagger';
import { api, setCookie } from '~/utils';


export type ChangePasswordResponse = paths['/auth/change-password']['post']['responses']['200']['content']['application/json'];
export type ChangePasswordBody = paths['/auth/change-password']['post']['requestBody']['content']['application/json'];


export async function changePassword(body: ChangePasswordBody): Promise<void> {
    const data = await api.post('auth/change-password', { json: body }).json<ChangePasswordResponse>();

    if (data.jwt) setCookie(AUTH_TOKEN_NAME, data.jwt);
}
