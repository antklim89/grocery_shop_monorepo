import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC, ReactElement, ReactNode } from 'react';

import NotFoundPage from '~/off-pages/404';
import { getMe } from '~/requests';


interface Props {
    notFound?: boolean
    redirect?: string | 'back'
    authNeeded?: boolean
    render?: ReactElement
    fallback?: ReactElement
    children?: ReactNode
}

const ProtectedComponent: FC<Props> = async ({
    children,
    redirect: redirectPath,
    notFound,
    render,
    authNeeded = true,
}) => {
    const tocken = cookies().get('token')?.value;
    const user = tocken ? await getMe(tocken).catch(() => null) : null;
    const isAuth = Boolean(user);

    const needProtect = authNeeded
        ? !isAuth
        : isAuth;


    if (needProtect && redirectPath) {
        redirect(redirectPath);
        return null;
    }


    if (needProtect && notFound) return <NotFoundPage />;

    if (needProtect && render) return render;

    if (needProtect) return null;

    return <>{children}</>;
};

export default ProtectedComponent;
