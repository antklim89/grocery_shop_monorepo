import Link from 'next/link';

import HeaderLinks from './HeaderLinks';

import CartButton from '~/components/cart/CartButton';
import { useBootstrap } from '~/utils';


const Header = (): JSX.Element => {
    useBootstrap('Offcanvas');

    return (
        <header >
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4">
                <div className="container">
                    <Link passHref className="navbar-brand me-auto" href="/">
                        GROCERY SHOP
                    </Link>
                    <button
                        aria-controls="offcanvasNavbar"
                        className="navbar-toggler"
                        data-bs-target="#offcanvasNavbar"
                        data-bs-toggle="offcanvas"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        aria-labelledby="offcanvasNavbarLabel"
                        className="offcanvas offcanvas-end text-bg-primary"
                        id="offcanvasNavbar"
                        tabIndex={-1}
                    >
                        <div className="offcanvas-header">
                            <span className="offcanvas-title" id="offcanvasNavbarLabel" />
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                type="button"
                            />
                        </div>
                        <div className="offcanvas-body mx-1">
                            <HeaderLinks />
                        </div>
                    </div>
                    <CartButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;
