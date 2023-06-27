

interface PriceArgs {
    price: number;
    discount?: number;
    qty?: number;
}

const formatter = Intl.NumberFormat('en-GB', {
    maximumFractionDigits: 2,
    notation: 'standard',
});


export function getPrice({ price, discount = 0, qty = 1 }: PriceArgs): string {
    return formatter.format((price / (100 - discount) * 100) * qty);
}

