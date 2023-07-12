import { FC, HTMLAttributes, memo } from 'react';

import { cls } from '~/utils';


interface Props extends HTMLAttributes<HTMLDivElement> {
    loading: boolean
    size?: 'sm' | 'lg'
}

const Loading: FC<Props> = ({ loading, size, className, ...props }) => {

    return loading
        ? (
            <div
                className={cls(
                    'spinner-border',
                    'ms-1',
                    size && `spinner-border-${size}`,
                    className,
                )}
                role="status"
                {...props}
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        )
        : null;
};

export default memo(Loading);
