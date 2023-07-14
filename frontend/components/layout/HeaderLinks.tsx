'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoutButton from '~/components/auth/LogoutButton';
import NoSsr from '~/components/common/NoSsr';
import { useAuthStore } from '~/store';
import { cls } from '~/utils/cls';


interface HeaderLinksProps {
    className?: string;
}

const HeaderLinks = ({ className }: HeaderLinksProps): JSX.Element => {
    const pathname = usePathname();
    const user = useAuthStore((state) => state.user);

    return (
        <div className="collapse navbar-collapse" id="navbarToggler">
            <ul
                className={cls('navbar-nav justify-content-end flex-grow-1 pe-3', className)}
            >
                <li className="nav-item" data-target=".navbar-collapse.show" data-toggle="collapse">
                    <Link passHref className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/" >
                        HOME
                    </Link>
                </li>
                <li className="nav-item">
                    <Link passHref className={`nav-link ${pathname === '/product' ? 'active' : ''}`} href="/product">
                        PRODUCTS
                    </Link>
                </li>
                <li className="nav-item me-auto">
                    <Link passHref className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">
                        ABOUT
                    </Link>
                </li>
                <NoSsr>
                    {user
                        ? (
                            <>
                                <li className="nav-item me-1">
                                    <Link className={`nav-link ${pathname === '/profile' ? 'active' : ''}`} href="/profile">
                                        PROFILE
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <LogoutButton
                                        className="nav-link"
                                    />
                                </li>
                            </>
                        )
                        : (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/signup' ? 'active' : ''}`} href="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className={`nav-link ${pathname === '/login' ? 'active' : ''}`} href="/login">
                                        Log In
                                    </Link>
                                </li>
                            </>
                        )}
                </NoSsr>
            </ul>
        </div>
    );
};

export default HeaderLinks;
