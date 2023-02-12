import ky from 'ky';

import { API_URL, AUTH_TOKEN_NAME } from '~/constants';
import { getCookie } from '~/utils';


export const api = ky.create({
    prefixUrl: `${API_URL}/api`,
    hooks: {
        beforeRequest: [
            (req) => {
                const token = getCookie(AUTH_TOKEN_NAME);
                if (token) {
                    req.headers.append('Authorization', `Bearer ${token}`);
                }

            },
        ],
        beforeError: [
            async (error) => {
                await error.response.json().then((json) => {
                    error.message = json?.error?.message || 'Unexpected errror. Try again later.';
                });

                return error;
            },
        ],
    },
});
