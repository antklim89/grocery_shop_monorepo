import Link from 'next/link';
import { FC, memo } from 'react';

import Price from '~/components/utils/Price';
import { useCartStore } from '~/store';
import { ICart } from '~/types';


const CartListItem: FC<{cartItem: ICart}> = ({ cartItem }) => {
    const changeQty = useCartStore((state) => state.updateCartItem);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const { id, name, price, unit } = cartItem.product;

    return (
        <section className="row list-group-item d-flex">
            <div className="col-lg-8 col-12">
                <Link passHref href={`/product/${id}`}>
                    <h2 className="mb-1">{name}</h2>
                </Link>
                <small>
                    <Price
                        price={price}
                        unit={unit}
                    />
                </small>
            </div>

            <div className="col-lg-4 col-12 d-flex justify-content-between">
                <label className="form-label my-2">
                    Quantity: ({unit})
                    <input
                        className="form-control"
                        type="number"
                        value={cartItem.qty}
                        onChange={(e) => changeQty(id, { qty: Number(e.target.value) })}
                    />
                </label>
                <button
                    className="btn btn-outline-danger btn-lg m-2 align-self-center"
                    type="button"
                    onClick={() => toggleCart(cartItem)}
                >
                    <i className="bi bi-trash" />
                </button>
            </div>
        </section>
    );
};

export default memo(CartListItem);
