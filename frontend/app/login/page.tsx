import { Metadata } from 'next';

import Auth from '~/components/auth/Auth';
import ProtectedComponent from '~/components/utils/ProtectedComponent';


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
