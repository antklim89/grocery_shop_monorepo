import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC, ReactElement, ReactNode } from 'react';

import NotFound from '~/components/utils/NotFound';
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
    const token = cookies().get('token')?.value;
    const user = token ? await getMe(token).catch(() => null) : null;
    const isAuth = Boolean(user);

    const needProtect = authNeeded
        ? !isAuth
        : isAuth;


    if (needProtect && redirectPath) {
        redirect(redirectPath);
        return null;
    }


    if (needProtect && notFound) return <NotFound />;

    if (needProtect && render) return render;

    if (needProtect) return null;

    return <>{children}</>;
};

export default ProtectedComponent;
