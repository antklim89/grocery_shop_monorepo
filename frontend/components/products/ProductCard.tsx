'use client';
import Link from 'next/link';
import { FC } from 'react';

import NoSsr from '../common/NoSsr';

import CatalogItem from './CatalogItem';

import Price from '~/components/common/Price';
import StrapiImage from '~/components/common/StrapiImage';
import { CATEGORY_QUERY_NAME, COUNTRY_QUERY_NAME } from '~/constants';
import { useCartStore } from '~/store';
import { IProductPreview } from '~/types';


const ProductCard: FC<IProductPreview> = (product) => {
    const {
        name, price, country, id, category, unit, discount, images,
    } = product;

    const cartItems = useCartStore((state) => state.cartItems);
    const getCurrentCart = useCartStore((state) => state.getCurrentCart);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const isPoroductInCart = Boolean(cartItems[id]);

    const handleToggleCart = (): void => {
        const cartToToggle = getCurrentCart(product);
        if (cartToToggle) toggleCart(cartToToggle);
    };

    return (
        <div className="col-12 col-lg-6 col-xl-4 align-items-stretch">
            <article className="card shadow-sm h-100 position-relative">
                <div className="card-header m-0 p-1 text-uppercase breadcrumb d-flex justify-content-center">
                    <CatalogItem
                        className="breadcrumb-item"
                        queryName={CATEGORY_QUERY_NAME}
                        value={category.name}
                    />
                    <CatalogItem
                        className="breadcrumb-item"
                        queryName={COUNTRY_QUERY_NAME}
                        value={country.name}
                    />
                </div>
                <div className="position-relative">
                    <StrapiImage
                        alt={name}
                        className="card-img-top"
                        height={220}
                        image={images[0]}
                        width={400}
                    />
                    <div className="position-absolute end-0 top-10 m-1 text-white">
                        <NoSsr>
                            {isPoroductInCart ? <i className="bi bi-cart-check d-inline-block p-1 m-1 w-100 text-center rounded bg-primary" /> : null}
                        </NoSsr>
                        <br />
                        {discount > 0 && <span className="d-inline-block p-1 m-1 w-100 text-center rounded bg-primary">{discount}%</span>}
                    </div>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="card-title mb-auto">{name}</h2>
                    <div className="my-4">
                        <Price
                            discount={discount}
                            price={price}
                            unit={unit}
                        />
                    </div>
                    <Link className="btn btn-outline-primary" href={`/product/${id}`}>
                        View Details
                    </Link>
                    <button
                        className="btn btn-primary my-2"
                        type="submit"
                        onClick={handleToggleCart}
                    >
                        <NoSsr fallback={<span>&nbsp;</span>}>
                            {isPoroductInCart ? 'Remove from Cart' : 'Place to Cart'}
                        </NoSsr>
                    </button>
                </div>
            </article>
        </div>
    );
};

export default ProductCard;

