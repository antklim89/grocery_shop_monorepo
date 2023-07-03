'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, HTMLAttributes, useRef, useState } from 'react';

import { SEARCH_QUERY_NAME } from '~/constants';
import { cls, getSearchParams } from '~/utils';


const SearchProducts: FC<HTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    const { replace } = useRouter();
    const query = useSearchParams();
    const [searchValue, setSearchValue] = useState(query.get(SEARCH_QUERY_NAME) as string || '');
    const prevSearchValue = useRef<string|null>(null);

    const handleSearch = async () => {
        if (searchValue === prevSearchValue.current) return;

        const params = getSearchParams({ queryName: SEARCH_QUERY_NAME, query, value: searchValue, removeByValue: '' });
        replace(`/product${params}`);

        prevSearchValue.current = searchValue;
    };

    return (
        <div className="position-relative">
            <input
                autoComplete="on"
                className={cls(className, 'form-control')}
                placeholder="Enter search request..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
