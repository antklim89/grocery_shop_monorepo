'use client';
import { ReactNode, useEffect, useState } from 'react';


const NoSsr = ({ children, fallback }: {children: ReactNode, fallback?: ReactNode}) => {
    const [inited, setInited] = useState(false);

    useEffect(() => {
        setInited(true);
    }, []);

    if (inited) return <>{children}</>;
    return <>{fallback}</>;
};

export default NoSsr;
