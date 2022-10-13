import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';

import { cls } from '~/utils';


interface Props extends HTMLAttributes<HTMLAnchorElement> {
    value: string
    isDefault?: boolean
}

const QUERY_NAME = 'sort';

const SortProducts: FC<Props> = ({ value, children, className, isDefault, ...props }) => {
    const { query, pathname } = useRouter();

    const params = new URLSearchParams(query as Record<string, string> || '');

    const [currentValue, direction] = params.get(QUERY_NAME)?.split(':') || [];

    if (currentValue === value) params.set(QUERY_NAME, `${value}:${(direction ? direction === 'desc' : !isDefault) ? 'asc' : 'desc'}`);
    else if (currentValue !== value) params.set(QUERY_NAME, `${value}:desc`);

    const isActive = currentValue ? currentValue === value : isDefault;

    return (
        <Link href={params.toString().length === 0
            ? pathname
            : `${pathname}?${params}`}
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
