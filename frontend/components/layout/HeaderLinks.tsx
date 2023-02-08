import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoutButton from '~/components/auth/LogoutButton';
import Loading from '~/components/utils/Loading';
import NoSsr from '~/components/utils/NoSsr';
import ProtectedComponent from '~/components/utils/ProtectedComponent';
import { useAuthStore } from '~/store';
import { cls } from '~/utils';


interface HeaderLinksProps {
    className?: string;
}

const HeaderLinks = ({ className }: HeaderLinksProps): JSX.Element => {
    const { route } = useRouter();
    const username = useAuthStore((state) => state.user?.username);

    return (
        <ul className={cls('navbar-nav justify-content-end flex-grow-1 pe-3', className)}>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link passHref className={`nav-link ${route === '/' ? 'active' : ''}`} href="/">
                    HOME
                </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link passHref className={`nav-link ${route === '/products' ? 'active' : ''}`} href="/product">
                    PRODUCTS
                </Link>
            </li>
            <li className="nav-item me-auto" data-bs-dismiss="offcanvas">
                <Link passHref className={`nav-link ${route === '/about' ? 'active' : ''}`} href="/about">
                    ABOUT
                </Link>
            </li>
            <ProtectedComponent
                fallback={(
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                        <button className="btn btn-link nav-link mx-5" type="button">
                            <Loading loading size="sm" />
                        </button>
                    </li>
                )}
                render={(
                    <>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link className={`nav-link ${route === '/signup' ? 'active' : ''}`} href="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item me-5" data-bs-dismiss="offcanvas">
                            <Link className={`nav-link ${route === '/login' ? 'active' : ''}`} href="/login">
                                Log In
                            </Link>
                        </li>
                    </>
                )}
            >
                <li className="nav-item me-1">
                    <NoSsr>
                        <Link className="nav-link btn btn-link" href="/profile">
                            {username}
                        </Link>
                    </NoSsr>
                </li>
                <li className="nav-item me-5">
                    <LogoutButton
                        className="nav-link"
                    />
                </li>
            </ProtectedComponent>
        </ul>
    );
};

export default HeaderLinks;
