import { makeAutoObservable, observable } from 'mobx';

import { CartItemStore } from './CartItemStore';

import { ICart } from '~/types';
import { getCartItems } from '~/utils';


export class CartStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    cartItems = observable.array<CartItemStore>();

    loading = false;

    isInited = true;

    toggleCart(cartItem: CartItemStore): void {
        if (!this.isProductInCart(cartItem.product.id)) this.cartItems.push(cartItem);
        else {
            const idx = this.cartItems.findIndex((item) => Number(item.product.id) === Number(cartItem.product.id));
            this.cartItems.splice(idx, 1);
        }
    }

    init() {
        const cartItems = getCartItems();
        this.replace(cartItems);
        this.isInited = true;
    }

    replace(newCartItems: ICart[]): void {
        const newCartItemStores = newCartItems.map((cartItem) => new CartItemStore(cartItem));
        this.cartItems.replace(newCartItemStores);
    }

    isProductInCart(productId?: number|string): boolean {
        if (!productId) return false;
        return Boolean(this.cartItems.find((prevItem) => Number(prevItem.product.id) === Number(productId)));
    }

    getCurrentCart(product: ICart['product']): CartItemStore {
        return this.cartItems.find((item) => Number(item.product.id) === Number(product.id))
            || new CartItemStore({ qty: 1, product });
    }
}
