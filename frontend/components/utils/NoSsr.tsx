import { ReactNode, useEffect, useState } from 'react';


const NoSsr = ({ children }: {children: ReactNode}) => {
    const [inited, setInited] = useState(false);

    useEffect(() => {
        setInited(true);
    }, []);

    if (inited) return <>{children}</>;
    return null;
};

export default NoSsr;
