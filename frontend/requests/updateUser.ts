import { userSchema } from '~/schemas';
import { paths } from '~/swagger';
import { IUser } from '~/types';
import { api } from '~/utils';


export type ChangePasswordResponse = paths['/users/{id}']['put']['responses']['200']['content']['application/json'];
export type ChangePasswordBody = {
    name?: string
    surname?: string
    address?: string
    phone?: string
}


export async function updateUser(id:number, body: ChangePasswordBody): Promise<IUser> {
    const { data } = await api.put<ChangePasswordResponse>(`/users/${id}`, body);

    const user = await userSchema.parseAsync(data);
    return user;
}
