import { Observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC, memo } from 'react';

import { useCart } from './CartProvider';

import Price from '~/components/utils/Price';
import { CartItemStore } from '~/store/CartItemStore';


const CartListItem: FC<{cartItem: CartItemStore}> = ({ cartItem }) => {
    const cart = useCart();
    const { product } = cartItem;


    return (
        <section className="row list-group-item d-flex">
            <div className="col-lg-8 col-12">
                <Link passHref href={`/product/${product.id}`}>
                    <a><h2 className="mb-1">{product.name}</h2></a>
                </Link>
                <small>
                    <Price
                        price={product.price}
                        unit={product.unit}
                    />
                </small>
            </div>

            <div className="col-lg-4 col-12 d-flex justify-content-between">
                <label className="form-label my-2">
                    Quantity: ({product.unit})
                    <Observer>
                        {() => (
                            <input
                                className="form-control"
                                type="number"
                                value={cartItem.qty}
                                onChange={(e) => cartItem.changeQty(e.target.value)}
                            />
                        )}
                    </Observer>
                </label>
                <button
                    className="btn btn-outline-danger btn-lg m-2 align-self-center"
                    type="button"
                    onClick={() => cart.toggleCart(cartItem)}
                >
                    <i className="bi bi-trash" />
                </button>
            </div>
        </section>
    );
};

export default memo(CartListItem);
