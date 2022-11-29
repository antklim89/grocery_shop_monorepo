import { AxiosError } from 'axios';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import Features from '~/components/layout/Features';
import Hero from '~/components/layout/Hero';
import ProductsList from '~/components/products/ProductsList';
import Seo from '~/components/utils/Seo';
import { getHero, getProductsPreviews } from '~/requests';
import { getFeatures } from '~/requests/getFeatures';
import { IHero, IFeature, IProductPreview } from '~/types';


interface Props {
    hero: IHero
    features: IFeature[]
    newProducts: IProductPreview[]
    discountProducts: IProductPreview[]
}

const HomePage: NextPage<Props> = ({ newProducts, discountProducts, hero, features }) => {
    return (
        <>
            <Seo title="Home" />
            <Hero {...hero} />
            <div className="container">
                <ProductsList products={newProducts} />
            </div>
            <Features features={features} />
            <div className="container">
                <ProductsList products={discountProducts} />
            </div>
            <div className="text-center my-3">
                <Link className="btn btn-primary" href="/product">
                    <a>Shom more</a>
                </Link>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const [
            { products: newProducts },
            { products: discountProducts },
            hero,
            features,
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
            getHero(),
            getFeatures(),
        ]);

        return { props: { newProducts, discountProducts, hero, features } };
    } catch (error) {
        if (error instanceof AxiosError) console.error(error.response?.data);
        return { notFound: true };
    }

};

export default HomePage;
