import { Metadata } from 'next';

import ProductsBlock from '~/components/products/ProductsBlock';


export const getMetadata = (): Metadata => {

    return {
        title: 'Products',
        description: 'Product list.',

    };
};

const Products = ({ searchParams }: {searchParams: Record<string, string|undefined>}) => {
    return (
        <ProductsBlock searchParams={searchParams} />
    );
};

export default Products;
