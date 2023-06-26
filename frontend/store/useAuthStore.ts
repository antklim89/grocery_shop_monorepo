import { ZodError } from 'zod';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AUTH_LOCAL_STORAGE_NAME } from '~/constants';
import {
    LoginBody, SignupBody, getMe, login, signup, logout, UpdateUserBody, updateUser,
} from '~/requests';
import { userSchema } from '~/schemas';
import { IAuthResponse, IUser } from '~/types';


interface Store {
    user: IUser | null
    loading: boolean;
    loginOrSignup(request: () => Promise<IAuthResponse>): Promise<void>
    signup(body: SignupBody): Promise<void>
    login(body: LoginBody): Promise<void>
    logout(): Promise<void>
    getUser(): IUser
    fetchMe(): Promise<void>
    updateUser(body: UpdateUserBody): Promise<void>
}

export const useAuthStore = create(persist(immer<Store>((set, get) => ({
    user: null,
    loading: false,
    error: null,

    async signup(body: SignupBody): Promise<void> {
        await get().loginOrSignup(() => signup(body));
    },

    async login(body: LoginBody): Promise<void> {
        await get().loginOrSignup(() => login(body));
    },

    async logout(): Promise<void> {
        await logout();
        set((state) => {
            state.user = null;
        });
        window.location.reload();
    },

    async updateUser(body: UpdateUserBody): Promise<void> {
        const userId = get().user?.id;
        if (!userId) throw new Error('You are not authenticated.');
        await updateUser(userId, body);
        set((state) => {
            if (state.user) state.user = { ...state.user, ...body };
        });
    },

    getUser(): IUser {
        return userSchema.parse(get().user);
    },

    async fetchMe(): Promise<void> {
        if (!get().user) return;
        try {
            const user = await getMe();
            set((state) => (state.user = user));
        } catch (error) {
            set((state) => (state.user = null));
        }
    },

    async loginOrSignup(request: () => Promise<IAuthResponse>): Promise<void> {
        set((state) => {
            state.loading = false;
        });
        try {
            const { user } = await request();
            set((state) => {
                state.user = user;
            });
            window.location.reload();
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error(error.message);
            }
            throw error;
        } finally {
            set((state) => {
                state.loading = false;
            });
        }
    },

})), {
    name: AUTH_LOCAL_STORAGE_NAME,
}));
