import { Metadata } from 'next';

import NotFound from '~/components/common/NotFound';
import Product from '~/components/products/Product';
import { getProduct, getProductsPreviews } from '~/requests';


export const generateMetadata = async ({ params }: {params: {id: string}}): Promise<Metadata> => {
    const product = await getProduct(Number(params.id));

    if (!product) return { title: 'Product' };
    return {
        title: product.name,
        description: product.description,
        keywords: [product.name, product.category.name, product.country.name],
    };
};

export const generateStaticParams = async () => {
    const { products } = await getProductsPreviews();

    return products.map((product) => ({ id: product.id.toString() }));
};

const ProductPage = async ({ params }: {params: {id: string}}) => {
    const product = await getProduct(Number(params.id));

    if (!product) return <NotFound />;
    return (
        <Product {...product} />
    );
};

export default ProductPage;
