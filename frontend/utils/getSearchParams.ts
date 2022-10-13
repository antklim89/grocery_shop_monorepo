
type Query = import('querystring').ParsedUrlQuery | string | string[][] | Record<string, string> | URLSearchParams | undefined | null

interface Arguments {
    queryName: string;
    query: Query;
    value: number | string | string[] ;
    removeByValue?: number | string | string[] ;
}

export function getSearchParams({ queryName, query, value, removeByValue }: Arguments): string {
    const params = new URLSearchParams(query as Record<string, string> || '');


    if (removeByValue && `${value}` === `${removeByValue}`) {
        params.delete(queryName);
    } else if (params.has(queryName)) {
        params.set(queryName, `${value}`);
    } else {
        params.append(queryName, `${value}`);
    }
    const resultQuery = params.toString();

    return resultQuery.length === 0 ? resultQuery : `?${resultQuery}`;
}
