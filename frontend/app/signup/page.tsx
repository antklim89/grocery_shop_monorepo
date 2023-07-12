import { Metadata } from 'next';

import Auth from '~/components/auth/Auth';
import ProtectedComponent from '~/components/common/ProtectedComponent';


export const metadata: Metadata = {
    title: 'Sign Up',
};

const SignupPage = (): JSX.Element => {
    return (
        <ProtectedComponent authNeeded={false} redirect="/">
            <Auth isSignup />
        </ProtectedComponent>
    );
};

export default SignupPage;
