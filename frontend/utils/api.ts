import axios from 'axios';

import { API_URL, AUTH_TOKEN_NAME } from '~/constants';
import { getCookie } from '~/utils';


const api = axios.create({
    baseURL: `${API_URL}/api`,
});

if (typeof window !== 'undefined') {
    api.interceptors.request.use(
        (response) => {
            const token = getCookie(AUTH_TOKEN_NAME);
            if (token) {
                response.headers.Authorization = `Bearer ${getCookie(AUTH_TOKEN_NAME)}`;
            }
            return response;
        },
        (error) => {
            error.message = error.response?.data?.message || error.message || 'Unexpected Error. Try again later.';
            return Promise.reject(error);
        },
    );
}


export { api };
