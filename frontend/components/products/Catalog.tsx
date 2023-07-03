import Link from 'next/link';
import { FC } from 'react';

import CatalogItem from './CatalogItem';

import { CATEGORY_QUERY_NAME, COUNTRY_QUERY_NAME } from '~/constants';
import { getCategories, getCounties } from '~/requests';
import { cls } from '~/utils';


const Catalog: FC = async () => {
    const countries = await getCounties();
    const categories = await getCategories();

    return (
        <nav>
            <ul className="list-group mb-4">
                <Link
                    className={cls(
                        'list-group-item',
                        'list-group-item-action',
                    )}
                    href="/product"
                    role="listitem"
                >
                    <b>All</b>
                </Link>
            </ul>
            <ul className="list-group mb-4">
                <h5>Category</h5>
                {categories.map((category) => (
                    <CatalogItem
                        className="list-group-item list-group-item-action text-uppercase"
                        key={category.id}
                        queryName={CATEGORY_QUERY_NAME}
                        value={category.name}
                    />
                ))}
            </ul>
            <ul className="list-group mb-4">
                <h5>Countries</h5>
                {countries.map((country) => (
                    <CatalogItem
                        className="list-group-item list-group-item-action text-uppercase"
                        key={country.id}
                        queryName={COUNTRY_QUERY_NAME}
                        value={country.name}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Catalog;
