import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';

import { SORT_QUERY_NAME } from '~/constants';
import { cls } from '~/utils';


interface Props extends HTMLAttributes<HTMLAnchorElement> {
    value: string
    isDefault?: boolean
}


const SortProducts: FC<Props> = ({ value, children, className, isDefault, ...props }) => {
    const { query } = useRouter();

    const params = new URLSearchParams(query as Record<string, string> || '');

    const [currentValue, direction] = params.get(SORT_QUERY_NAME)?.split(':') || [];

    if (currentValue === value) params.set(SORT_QUERY_NAME, `${value}:${(direction ? direction === 'desc' : !isDefault) ? 'asc' : 'desc'}`);
    else if (currentValue !== value) params.set(SORT_QUERY_NAME, `${value}:desc`);

    const isActive = currentValue ? currentValue === value : isDefault;

    return (
        <Link href={params.toString().length === 0
            ? '/product'
            : `/product?${params}`}
        >
            <a className={cls(className, isActive && 'active')} {...props}>
                {children || value}
                {(currentValue ? (direction === 'asc' && currentValue === value) : isDefault)
                    ? <i className="bi bi-chevron-up mx-1" />
                    : <i className="bi bi-chevron-down mx-1" />}
            </a>
        </Link>
    );
};

export default SortProducts;
