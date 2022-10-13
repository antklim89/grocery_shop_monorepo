import { toJS } from 'mobx';

import { CART_LOCAL_STORAGE_NAME } from '~/constants';
import { cartSchema } from '~/schemas';
import { ICart } from '~/types';


const isBrowser = typeof window !== 'undefined';


export const setCartStorage = (cartItems: ICart[]): ICart[] => {
    const cartItemsValidated = cartSchema.array().parse(toJS(cartItems));

    localStorage.setItem(CART_LOCAL_STORAGE_NAME, JSON.stringify(cartItemsValidated));

    return cartItemsValidated;
};


export function getCartItems(): ICart[] {
    if (!isBrowser) return [];
    const dataStr = localStorage.getItem(CART_LOCAL_STORAGE_NAME);

    if (!dataStr) return [];
    const data = JSON.parse(dataStr) || [];

    const cartItemsValidated = cartSchema.array().parse(data);
    return cartItemsValidated;
}
