import { authSchema } from '~/schemas';
import { paths } from '~/swagger';
import { api } from '~/utils';


export type LoginResponse = paths['/auth/local']['post']['responses']['200']['content']['application/json'];
export type LoginBody = paths['/auth/local']['post']['requestBody']['content']['application/json'];


export async function login(body: LoginBody) {
    const { data } = await api.post<LoginResponse>('/auth/local', body);

    const authData = await authSchema.parseAsync(data);
    return authData;
}
