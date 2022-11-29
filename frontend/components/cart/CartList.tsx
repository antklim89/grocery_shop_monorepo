import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import Price from '../utils/Price';

import CartListItem from './CartListItem';

import { useCart } from '~/components/cart/CartProvider';
import Loading from '~/components/utils/Loading';
import ProtectedComponent from '~/components/utils/ProtectedComponent';


const CartList = (): JSX.Element => {
    const cart = useCart();

    if (!cart.isInited) {
        return (
            <div className="d-flex justify-content-center py-5"><Loading loading /></div>
        );
    }

    if (!cart.cartItems || cart.cartItems.length === 0) {
        return (
            <p className="h1 text-center text-uppercase">Cart is Empty</p>
        );
    }

    const totalPrice = cart.cartItems.reduce((acc, i) => acc + (i.product.price * i.qty), 0);

    return (
        <div className="container">
            <div className="list-group mt-5">
                {cart.cartItems.map((cartItem) => (
                    <CartListItem cartItem={cartItem} key={cartItem.product.id} />
                ))}
            </div>
            <div className="my-2 d-flex flex-column">
                <div className="my-5 align-self-end">
                    <p className="h2">
                        <Price price={totalPrice} />
                    </p>
                </div>
                <ProtectedComponent
                    render={(
                        <Link className="btn btn-primary btn-lg align-self-center" href="/login">
                            Login to confirm order...
                        </Link>
                    )}
                >
                    <Link className="btn btn-primary btn-lg align-self-center" href="/order">
                        Create Order
                    </Link>
                </ProtectedComponent>
            </div>
        </div>
    );
};

export default observer(CartList);
