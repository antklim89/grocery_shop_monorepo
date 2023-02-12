import { userSchema } from '~/schemas';
import { paths } from '~/swagger';
import { api } from '~/utils';


export type MeResponse = paths['/users/me']['get']['responses']['200']['content']['application/json'];


export async function getMe(token?: string) {
    const headers: Record<string, string> = {};
    if (token) headers.Authorization = `Bearer ${token}`;

    const data = await api.get('users/me', { headers }).json<MeResponse>();

    const user = await userSchema.parseAsync(data);

    return user;
}
