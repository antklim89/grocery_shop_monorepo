import Profile from '~/components/auth/Profile';
import NoSsr from '~/components/utils/NoSsr';
import ProtectedComponent from '~/components/utils/ProtectedComponent';
import Seo from '~/components/utils/Seo';
import { useAuthStore } from '~/store';


const ProfilePage = (): JSX.Element => {
    const username = useAuthStore((state) => state.user?.username);

    return (
        <ProtectedComponent notFound>
            <NoSsr>
                <Seo description={`${username}' profile`} title={`${username}' profile`} />
            </NoSsr>
            <Profile />
        </ProtectedComponent>
    );
};


export default ProfilePage;
