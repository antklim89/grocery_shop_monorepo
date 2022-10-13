/* eslint-disable no-undefined */


interface PriceArgs {
    price: number;
    discount?: number;
    qty?: number;
}

const formatter = Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
});


export function getPrice({ price, discount = 0, qty = 1 }: PriceArgs): string {
    return formatter.format((price / (100 - discount) * 100) * qty);
}

