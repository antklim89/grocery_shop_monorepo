import { useRouter } from 'next/router';
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

import { cls } from '~/utils';


const QUERY_NAME = 'filters[name][$contains]';

const SearchProducts: FC<HTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    const [searchValue, setSearchValue] = useState('');
    const { replace, query, pathname } = useRouter();
    const prevSearchValue = useRef<string|null>(null);

    const handleSearch = async () => {
        if (searchValue === prevSearchValue.current) return;
        const params = new URLSearchParams(query as Record<string, string> || '');

        if (searchValue.length > 0) params.set(QUERY_NAME, searchValue);
        else params.delete(QUERY_NAME);

        if (params.toString().length > 0) replace(`${pathname}?${params}`);
        else replace(pathname);

        prevSearchValue.current = searchValue;
    };

    useEffect(() => {
        if (query.search === searchValue || typeof query.search === 'object') return;
        setSearchValue(query.search || '');
    }, [query.search]);

    return (
        <div className="position-relative">
            <input
                autoComplete="on"
                className={cls(className, 'form-control')}
                placeholder="Enter search request..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                {...props}
            />
            <button
                className="btn btn-primary px-4 position-absolute top-0 end-0"
                type="button"
                onClick={handleSearch}
            >
                <i className="bi bi-search" />
            </button>
        </div>
    );
};

export default SearchProducts;
