import { Metadata } from 'next';
import Link from 'next/link';

import { Features } from '~/components';
import Hero from '~/components/layout/Hero';
import { DEFAULT_DESCRIPTION } from '~/constants';


export const generateMetadata = (): Metadata => {
    const title = 'Home';
    const description = DEFAULT_DESCRIPTION;
    return {
        title,
        description,
        keywords: ['grocery', 'shop'],
        openGraph: {
            type: 'website',
            title,
        },
    };
};

const HomePage = () => {
    return (
        <>
            <Hero />
            <div className="container mt-4">
                <h2 className="text-center">New Products</h2>
                {/* <ProductsList products={newProducts} /> */}
            </div>
            <Features />
            <div className="container mt-4">
                <h2 className="text-center">Big Discount</h2>
                {/* <ProductsList products={discountProducts} /> */}
            </div>
            <div className="text-center my-3">
                <Link className="btn btn-primary" href="/product">
                    Shom more
                </Link>
            </div>
        </>
    );
};


export default HomePage;
