import { userSchema } from '~/schemas';
import { paths } from '~/swagger';
import { IUser } from '~/types';
import { api } from '~/utils';


export type UpdateUserResponse = paths['/users/{id}']['put']['responses']['200']['content']['application/json'];
export type UpdateUserBody = {
    name?: string
    surname?: string
    address?: string
    phone?: string
}


export async function updateUser(id:number, body: UpdateUserBody): Promise<IUser> {
    const data = await api.put(`users/${id}`, { json: body }).json<UpdateUserResponse>();

    const user = await userSchema.parseAsync(data);
    return user;
}
