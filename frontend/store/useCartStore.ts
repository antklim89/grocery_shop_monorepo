import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { CART_LOCAL_STORAGE_NAME } from '~/constants';
import { ICart } from '~/types';


interface Store {
    cartItems: Record<number, ICart>
    updateCartItem(id: number, newCartItem: Partial<ICart>): void
    getCurrentCart(product: ICart['product']): ICart
    toggleCart(cartItem: ICart): void
}


export const useCartStore = create(persist(immer<Store>((set, get) => ({
    cartItems: {},

    getCurrentCart(product: ICart['product']) {
        const cartItem = get().cartItems[product.id];
        if (cartItem) return cartItem;

        return { product, qty: 1 };
    },

    updateCartItem(id: number, newCartItem: Partial<ICart>): void {
        set((state) => {
            const cartItem = state.cartItems[id];
            if (cartItem) Object.assign(cartItem, newCartItem);
        });
    },

    toggleCart(cartItem: ICart): void {
        const isProductInCart = Boolean(get().cartItems[cartItem.product.id]);

        set((state) => {
            if (!isProductInCart) {
                state.cartItems[cartItem.product.id] = cartItem;
            } else {
                delete state.cartItems[cartItem.product.id];
            }
        });
    },
})), {
    name: CART_LOCAL_STORAGE_NAME,
}));

