import { Observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '~/components/auth/AuthProvider';
import LogoutButton from '~/components/auth/LogoutButton';
import Loading from '~/components/utils/Loading';
import ProtectedComponent from '~/components/utils/ProtectedComponent';
import { cls } from '~/utils';


interface HeaderLinksProps {
    className?: string;
}

const HeaderLinks = ({ className }: HeaderLinksProps): JSX.Element => {
    const { route } = useRouter();
    const auth = useAuth();

    return (
        <ul className={cls('navbar-nav justify-content-end flex-grow-1 pe-3', className)}>
            <li className="nav-item">
                <Link passHref href="/">
                    <a className={`nav-link ${route === '/' ? 'active' : ''}`} >
                        HOME
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link passHref href="/product">
                    <a className={`nav-link ${route === '/products' ? 'active' : ''}`} >
                        PRODUCTS
                    </a>
                </Link>
            </li>
            <li className="nav-item me-auto">
                <Link passHref href="/about">
                    <a className={`nav-link ${route === '/about' ? 'active' : ''}`}>
                        ABOUT
                    </a>
                </Link>
            </li>
            <ProtectedComponent
                fallback={(
                    <li className="nav-item">
                        <button className="btn btn-link nav-link mx-5" type="button">
                            <Loading loading size="sm" />
                        </button>
                    </li>
                )}
                render={(
                    <>
                        <li className="nav-item">
                            <Link href="/signup">
                                <a className={`nav-link ${route === '/signup' ? 'active' : ''}`} >
                                    Sign Up
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link href="/login">
                                <a className={`nav-link ${route === '/login' ? 'active' : ''}`} >
                                    Log In
                                </a>
                            </Link>
                        </li>
                    </>
                )}
            >
                <li className="nav-item me-1">
                    <Observer>
                        {() => (
                            <Link href="/profile">
                                <a className="nav-link btn btn-link" >
                                    {auth.user?.username || ''}
                                </a>
                            </Link>
                        )}
                    </Observer>
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
