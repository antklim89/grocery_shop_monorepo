'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';

import { cls, getSearchParams } from '~/utils';


interface Props extends HTMLAttributes<HTMLAnchorElement> {
    queryName: string;
    value: string
}

const CatalogItem: FC<Props> = ({ queryName, value, className, children, ...props }) => {
    const query = useSearchParams();

    const params = getSearchParams({ queryName, query, value, removeByValue: query.get(queryName) });
    const isActive = query.get(queryName) === value;

    return (
        <Link
            href={`/product${params}`}
            {...props}
            className={cls(className, isActive && 'active')}
        >
            { children || value }
        </Link>
    );
};

export default CatalogItem;
