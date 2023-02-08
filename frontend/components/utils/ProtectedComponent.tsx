import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';

import NotFoundPage from '~/pages/404';
import { useAuthStore } from '~/store';


interface Props {
    notFound?: boolean
    redirect?: string | 'back'
    authNeeded?: boolean
    render?: ReactElement
    fallback?: ReactElement
    children?: ReactNode
}

const ProtectedComponent: FC<Props> = ({
    children,
    redirect,
    notFound,
    render,
    fallback,
    authNeeded = true,
}) => {
    const isAuth = useAuthStore((state) => Boolean(state.user));
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    const needProtect = authNeeded
        ? !isAuth
        : isAuth;

    useEffect(() => {
        setIsMounted(true);

        if (needProtect && redirect === 'back') {
            router.back();
            return;
        }
        if (needProtect && redirect) {
            router.replace(redirect);
        }
    }, [isAuth]);


    if (!isMounted) return fallback || null;

    if (needProtect && notFound) return <NotFoundPage />;

    if (needProtect && render) return render;

    if (needProtect) return null;

    return <>{children}</>;
};

export default observer(ProtectedComponent);
