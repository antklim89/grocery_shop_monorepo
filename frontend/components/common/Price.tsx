import { FC, memo } from 'react';

import { getPrice } from '~/utils';


interface Props {
    price: number;
    discount?: number;
    unit?: string;
    qty?: number;
}

const Price: FC<Props> = ({
    price,
    unit,
    discount = 0,
    qty = 1,
}) => {

    const withDiscount = discount > 0
        ? (
            <>
                <span className="fs-3 ">{getPrice({ price, qty })}$</span>
                <span className="text-decoration-line-through">{getPrice({ price, discount, qty })}$</span>
            </>
        )
        : (
            <span className="fs-3">{getPrice({ price, qty })}$</span>
        );

    return (
        <span>
            {withDiscount}{unit ? ` for ${unit}` : ''}
        </span>
    );
};

export default memo(Price);
