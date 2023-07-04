import { Metadata } from 'next';

import { ProtectedComponent, Auth } from '~/components';


export const metadata: Metadata = {
    title: 'Login',
};

const LoginPage = (): JSX.Element => {
    return (
        <ProtectedComponent authNeeded={false} redirect="/">
            <Auth />
        </ProtectedComponent>
    );
};

export default LoginPage;
