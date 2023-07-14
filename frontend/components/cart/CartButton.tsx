'use client';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

import NoSsr from '~/components/common/NoSsr';
import { useCartStore } from '~/store';
import { cls } from '~/utils';


const CartButton = (props: ButtonHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
    const cartItemsLength = useCartStore((state) => Object.values(state.cartItems).length);

    return (
        <Link href="/cart" {...props} className={cls('btn btn-primary bg-dark position-relative mx-1', props.className)}>
            <i className="bi bi-cart " />
            <NoSsr>
                {cartItemsLength
                    ? (
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        >
                            {cartItemsLength || 0}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    )
                    : null}
            </NoSsr>
        </Link>
    );
};

export default CartButton;
