import { Metadata } from 'next';

import { ProtectedComponent, Auth } from '~/components';


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
