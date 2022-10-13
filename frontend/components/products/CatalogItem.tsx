import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';

import { cls, getSearchParams } from '~/utils';


interface Props extends HTMLAttributes<HTMLAnchorElement> {
    queryName: string;
    value: string
}

const CatalogItem: FC<Props> = ({ queryName, value, className, children, ...props }) => {
    const { query, pathname } = useRouter();

    const params = getSearchParams({ queryName, query, value, removeByValue: query[queryName] });
    const isActive = query[queryName] === value;

    return (
        <Link replace href={`${pathname}${params}`} >
            <a {...props} className={cls(className, isActive && 'active')} >
                { children || value }
            </a>
        </Link>
    );
};

export default CatalogItem;
