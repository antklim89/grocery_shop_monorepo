import { Metadata } from 'next';

import CartList from '~/components/cart/CartList';


export const metadata: Metadata = {
    title: 'Cart',
    description: 'Your cart',
};

const CartPage = (): JSX.Element => {
    return (
        <CartList />
    );
};

export default CartPage;
