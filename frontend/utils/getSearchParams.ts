import { PAGINATION_QUERY_NAME } from '~/constants';


type Query = import('querystring').ParsedUrlQuery | string | string[][] | Record<string, string> | URLSearchParams | undefined | null

interface Arguments {
    queryName: string;
    query: Query;
    value: number | string | string[];
    removeByValue?: number | string | string[] ;
}

export function getSearchParams({ queryName, query, value, removeByValue }: Arguments): string {
    const params = new URLSearchParams(query as Record<string, string> || '');

    if (typeof removeByValue !== 'undefined' && `${value}` === `${removeByValue}`) {
        params.delete(queryName);
    } else if (params.has(queryName)) {
        params.set(queryName, `${value}`);
    } else {
        params.append(queryName, `${value}`);
    }

    if (queryName !== PAGINATION_QUERY_NAME) {
        params.delete(PAGINATION_QUERY_NAME);
    }

    const resultQuery = params.toString();

    return resultQuery.length === 0 ? resultQuery : `?${resultQuery}`;
}
