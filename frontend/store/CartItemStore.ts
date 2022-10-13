import { makeAutoObservable } from 'mobx';

import type { ICart } from '~/types';


export class CartItemStore {
    constructor(cartItem: ICart) {
        this.product = cartItem.product;
        this.qty = cartItem.qty;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    product: ICart['product'];

    qty: number;

    changeQty(numb: number|string): void {
        this.qty = Number(numb);
    }
}
