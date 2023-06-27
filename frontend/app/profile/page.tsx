import { cookies } from 'next/headers';

import Profile from '~/components/auth/Profile';
import { getMe } from '~/requests';


export const metadata = {
    title: {
        default: 'Profile',
    },
    openGraph: {
        title: 'Profile',
    },
};

const ProfilePage = async () => {
    const token = cookies().get('token')?.value;
    const user = token ? await getMe(token).catch(() => null) : null;

    if (!user) return null;
    return <Profile />;
};


export default ProfilePage;
