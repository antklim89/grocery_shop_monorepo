import CreateOrder from '~/components/cart/CreateOrder';
import NoSsr from '~/components/utils/NoSsr';
import ProtectedComponent from '~/components/utils/ProtectedComponent';
import Seo from '~/components/utils/Seo';
import { useAuthStore } from '~/store';


const CreateOrderPage = (): JSX.Element => {
    const user = useAuthStore((state) => state.user);

    return (
        <ProtectedComponent>
            <Seo description="Create order page." title="Create order" />
            <NoSsr>
                <ProtectedComponent>
                    {user ? <CreateOrder {...user} /> : null}
                </ProtectedComponent>
            </NoSsr>
        </ProtectedComponent>
    );
};

export default CreateOrderPage;
