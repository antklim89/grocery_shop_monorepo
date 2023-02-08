export const CATEGORY_QUERY_NAME = 'filters[category][name][$eq]';
export const COUNTRY_QUERY_NAME = 'filters[country][name][$eq]';
export const SEARCH_QUERY_NAME = 'filters[name][$contains]';
export const SORT_QUERY_NAME = 'sort';
export const PAGINATION_QUERY_NAME = 'pagination[page]';


export const DEFAULT_DESCRIPTION = process.env.DEFAULT_DESCRIPTION || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores id nulla fugiat eius nostrum tempore alias illum deleniti, recusandae eligendi consectetur, dolor quisquam. Quibusdam eligendi at corrupti distinctio magnam voluptas quisquam repellat voluptatibus laudantium asperiores! Rerum error non, expedita amet repudiandae nisi incidunt, odit nostrum quo illum, perferendis commodi.';
export const DEFAULT_TITLE = process.env.DEFAULT_TITLE || 'Grocery Shop';
export const CREATOR = process.env.CREATOR || 'Me';

export const CART_LOCAL_STORAGE_NAME = process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_NAME || 'grocery-shop-cart';
export const AUTH_LOCAL_STORAGE_NAME = process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_NAME || 'grocery-shop-auth';
export const AUTH_TOKEN_NAME = process.env.AUTH_TOKEN_NAME || 'token';
export const PRODUCTS_LIMIT = Number(process.env.PRODUCTS_LIMIT) || 6;

export const API_URL = process.env.NEXT_PUBLIC_API_URL || (() => {
    throw new Error('NEXT_PUBLIC_API_URL env variable is required.');
})();

