import { Metadata } from 'next';

import ProductsBlock from '~/components/products/ProductsBlock';
import { getCategories, getCounties } from '~/requests';


export const generateMetadata = async (): Promise<Metadata> => {
    const [categories, countries] = await Promise.all([getCategories(), getCounties()]);
    return {
        title: 'Products',
        description: 'Product list.',
        keywords: [...categories.map((i) => i.name), ...countries.map((i) => i.name)],
    };
};

const Products = ({ searchParams }: {searchParams: Record<string, string|undefined>}) => {
    return (
        <ProductsBlock searchParams={searchParams} />
    );
};

export default Products;
