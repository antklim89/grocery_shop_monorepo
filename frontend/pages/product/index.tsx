import { GetServerSideProps } from 'next';

import ProductsBlock from '~/components/products/ProductsBlock';
import Seo from '~/components/utils/Seo';
import { getProductsPreviews } from '~/requests';
import { getCategories } from '~/requests/getCategories';
import { getCounties } from '~/requests/getCounties';
import { IProductPreview, ICatalogItem, IPagination } from '~/types';


interface ProductsPageProps {
    products: IProductPreview[]
    categories: ICatalogItem[]
    countries: ICatalogItem[]
    pagination: IPagination
}

const ProductsPage = ({ products, categories, countries, pagination }: ProductsPageProps): JSX.Element => {
    const categoriesNames = categories.map((item) => item.name);
    const countiesNames = countries.map((item) => item.name);

    return (
        <>
            <Seo description="Product list." keywords={[...categoriesNames, ...countiesNames]} title="Products" />
            <ProductsBlock
                categories={categories}
                countries={countries}
                pagination={pagination}
                products={products}
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async ({ query }) => {
    const { products, pagination } = await getProductsPreviews(query);
    const categories = await getCategories();
    const countries = await getCounties();

    return { props: { products, categories, countries, pagination } };
};

export default ProductsPage;
