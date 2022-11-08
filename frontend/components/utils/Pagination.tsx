import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { PAGINATION_QUERY_NAME } from '~/constants';
import { IPagination } from '~/types';
import { cls, getSearchParams } from '~/utils';


interface PaginationProps {
    pagination: IPagination
}


const Pagination = ({ pagination: { page = 1, pageCount } }: PaginationProps) => {
    const { replace, query } = useRouter();

    const getNextPage = useCallback(() => {
        const nextPage = Math.min(page + 1, pageCount);
        const prevPage = getSearchParams({ queryName: PAGINATION_QUERY_NAME, query, value: nextPage, removeByValue: '1' });
        replace(prevPage);
    }, [page]);

    const getPrevPage = useCallback(() => {
        const prevPage = Math.max(page - 1, 1);
        const nextPage = getSearchParams({ queryName: PAGINATION_QUERY_NAME, query, value: prevPage, removeByValue: '1' });
        replace(nextPage);
    }, [page]);

    const getPage = (value: number) => () => {
        const pageToGo = getSearchParams({ queryName: PAGINATION_QUERY_NAME, query, value, removeByValue: '1' });
        replace(pageToGo);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center my-3">
                <li className="page-item">
                    <button
                        className={cls('page-link', page <= 1 && 'disabled')}
                        type="button"
                        onClick={getPrevPage}
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: pageCount }).map((_, index) => (
                    <li className="page-item" key={index as number}>
                        <button
                            className={cls('page-link', page === index + 1 && 'active')}
                            type="button"
                            onClick={getPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button
                        className={cls('page-link', page >= pageCount && 'disabled')}
                        type="button"
                        onClick={getNextPage}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;


