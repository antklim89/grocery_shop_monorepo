import { Metadata } from 'next';
import Link from 'next/link';

import Features from '~/components/layout/Features';
import Hero from '~/components/layout/Hero';
import ProductsList from '~/components/products/ProductsList';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '~/constants';
import { getProductsPreviews } from '~/requests';


export const generateMetadata = (): Metadata => {
    const title = 'Home';
    const description = DEFAULT_DESCRIPTION;
    return {
        title: {
            default: title,
            template: `%s | ${DEFAULT_TITLE}`,
        },
        description,
        keywords: ['grocery', 'shop'],
        openGraph: {
            type: 'website',
            title,
        },
    };
};

const HomePage = async () => {
    const [
        { products: newProducts },
        { products: discountProducts },
    ] = await Promise.all([
        getProductsPreviews({
            'pagination[page]': 0,
            'pagination[pageSize]': 6,
            'sort': 'createdAt',
        }),
        getProductsPreviews({
            'pagination[page]': 0,
            'pagination[pageSize]': 6,
            'sort': 'discount:desc',
        }),
    ]);

    return (
        <>
            <Hero />
            <div className="container mt-4">
                <h2 className="text-center">New Products</h2>
                <ProductsList products={newProducts} />
            </div>
            <Features />
            <div className="container mt-4">
                <h2 className="text-center">Big Discount</h2>
                <ProductsList products={discountProducts} />
            </div>
            <div className="text-center my-3">
                <Link className="btn btn-primary" href="/product">
                    Shom more
                </Link>
            </div>
        </>
    );
};

export const dynamic = 'force-static';

export default HomePage;
