import { makeAutoObservable } from 'mobx';
import { ZodError } from 'zod';

import { AUTH_TOKEN_NAME } from '~/constants';
import { getMe, login, LoginBody, signup, SignupBody } from '~/requests';
import { userSchema } from '~/schemas';
import { IAuthResponse, IUser } from '~/types';
import { clearCookie, hasCookie, setCookie } from '~/utils';


export default class AuthStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public user?: Partial<IUser> = {};

    public isAuth = hasCookie(AUTH_TOKEN_NAME);

    public isUserFetched = false;

    public loading = false;

    public error: null | string = null;

    setUser(user: IUser, jwt?: string): void {
        this.isAuth = true;
        Object.assign(this.user || {}, user);

        if (jwt) setCookie(AUTH_TOKEN_NAME, jwt);
    }

    getUser(): IUser {
        return userSchema.parse(this.user);
    }

    async logout(): Promise<void> {
        this.user = {};
        this.isAuth = false;

        clearCookie(AUTH_TOKEN_NAME);
    }

    async signup(body: SignupBody): Promise<void> {
        await this.loginOrSignup(() => signup(body));
    }

    async login(body: LoginBody): Promise<void> {
        await this.loginOrSignup(() => login(body));
    }


    async fetchMe(): Promise<void> {
        if (!this.isAuth) return this.setIsUserFetched();
        try {
            const user = await getMe();
            this.setUser(user);
            return this.setIsUserFetched();
        } catch (error) {
            clearCookie(AUTH_TOKEN_NAME);
            return this.setIsUserFetched();
        }
    }

    private async loginOrSignup(request: () => Promise<IAuthResponse>): Promise<void> {
        this.setLoading(true);
        this.setError();
        try {
            const { jwt, user } = await request();
            this.setUser(user, jwt);
        } catch (error) {
            if (error instanceof ZodError) {
                this.setError('Unexpected error. Try again later.');
                console.error(error);
                return;
            }
            if (error instanceof Error) this.setError(error.message);
            throw error;
        } finally {
            this.setLoading(false);
        }
    }

    private setIsUserFetched(): void {
        this.isUserFetched = true;
    }

    private setLoading(state = true): void {
        this.loading = state;
    }

    public setError(state: string|null = null): void {
        this.error = state;
    }
}
