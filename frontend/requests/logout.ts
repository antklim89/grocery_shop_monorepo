import { AUTH_TOKEN_NAME } from '~/constants';
import { clearCookie } from '~/utils';


export async function logout() {
    clearCookie(AUTH_TOKEN_NAME);
}
