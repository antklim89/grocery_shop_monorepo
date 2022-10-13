import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC } from 'react';


import CatalogItem from './CatalogItem';

import { useCart } from '~/components/cart/CartProvider';
import Price from '~/components/utils/Price';
import StrapiImage from '~/components/utils/StrapiImage';
import { IProductPreview } from '~/types';


const ProductCard: FC<IProductPreview> = (product) => {
    const {
        name, price, country, id, category, unit, discount, images,
    } = product;

    const cart = useCart();

    const isPoroductInCart = cart.isProductInCart(id);

    const handleToggleCart = (): void => {
        const cartToToggle = cart.getCurrentCart(product);
        cart.toggleCart(cartToToggle);
    };

    return (
        <div className="col-12 col-lg-6 col-xl-4 align-items-stretch">
            <article className="card shadow-sm h-100 position-relative">
                <div className="card-header m-0 p-1 text-uppercase breadcrumb d-flex justify-content-center">
                    <CatalogItem
                        className="breadcrumb-item"
                        queryName="category"
                        value={category.name}
                    />
                    <CatalogItem
                        className="breadcrumb-item"
                        queryName="country"
                        value={country.name}
                    />
                </div>
                <div className="position-relative">
                    <StrapiImage
                        alt={name}
                        className="card-img-top img-fluid"
                        height={220}
                        image={images[0]}
                        width={400}
                    />
                    <div className="position-absolute end-0 top-10 m-1 text-white">
                        {isPoroductInCart ? <i className="bi bi-cart-check d-inline-block p-1 m-1 w-100 text-center rounded bg-primary" /> : null}
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
                    <Link href={`/product/${id}`}>
                        <a className="btn btn-outline-primary">View Details</a>
                    </Link>
                    <button
                        className="btn btn-primary my-2"
                        disabled={cart.loading}
                        type="submit"
                        onClick={handleToggleCart}
                    >
                        {isPoroductInCart ? 'Remove from Cart' : 'Place to Cart'}
                    </button>
                </div>
            </article>
        </div>
    );
};

export default observer(ProductCard);

