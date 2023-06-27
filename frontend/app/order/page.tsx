import { Metadata } from 'next';
import { cookies } from 'next/headers';

import CreateOrder from '~/components/cart/CreateOrder';
import { getMe } from '~/requests';


export const metadata: Metadata = {
    title: 'Create order',
    description: 'Create order',
};

const CreateOrderPage = async () => {
    const token = cookies().get('token')?.value;
    const user = token ? await getMe(token).catch(() => null) : null;

    if (!user) return null;
    return (
        <CreateOrder {...user} />
    );
};

export default CreateOrderPage;
