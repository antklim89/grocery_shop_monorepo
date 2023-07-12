'use client';
import { FC, FormEvent, useReducer } from 'react';

import Price from '~/components/common/Price';
import { useCartStore } from '~/store';
import { ICart, IProduct } from '~/types';


const ProductOrder: FC<IProduct> = (product) => {
    const {
        id, name, country, category, discount, price, unit,
    } = product;

    const getCurrentCart = useCartStore((state) => state.getCurrentCart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const updateCartItem = useCartStore((state) => state.updateCartItem);


    const [cartItem, setCartItem] = useReducer(
        (oldState: ICart, newState: Partial<Pick<ICart, 'qty'>>) => {
            updateCartItem(id, newState);
            return { ...oldState, ...newState };
        },
        getCurrentCart(product),
    );

    const handleOrder = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleCart(cartItem);
    };

    return (
        <div className="border h-100 shadow p-2 d-flex flex-column">
            <h1 className="text-center py-2 text-dark border-bottom">{name}</h1>

            <div className="fs-5 py-2 border-bottom">
                {discount > 0 && <p>Discount: {discount}%</p>}
                <p>
                    Price: <br />
                    <Price price={price} />
                </p>
                <p>
                    Total price for{' '}{cartItem.qty}{' '}{unit}:
                    <br />
                    <span className="big bold">
                        <Price price={price} qty={cartItem.qty} />
                    </span>
                </p>
            </div>

            <div className="py-2  border-bottom">
                <p><big className="text-capitalize">{category.name}</big></p>
                <p><big className="text-capitalize">{country.name}</big></p>
            </div>

            <form
                className="d-flex flex-column justify-content-end flex-column flex-grow-1"
                onSubmit={handleOrder}
            >
                <label className="form-label my-2" htmlFor="qte">
                    Quantity: ({unit})
                    <input
                        className="form-control"
                        id="qte"
                        type="number"
                        value={cartItem.qty}
                        onChange={(e) => setCartItem({ qty: Number(e.target.value) })}
                    />
                </label>
                {cartItems[id]
                    ? (
                        <input
                            className="btn btn-primary my-2"
                            type="submit"
                            value="Remove from Cart"
                        />
                    )
                    : (
                        <input
                            className="btn btn-primary my-2"
                            type="submit"
                            value="Place to Cart"
                        />
                    )}
            </form>
        </div>
    );
};

export default ProductOrder;
