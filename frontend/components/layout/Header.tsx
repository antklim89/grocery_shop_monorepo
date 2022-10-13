import Link from 'next/link';

import HeaderLinks from './HeaderLinks';

import CartButton from '~/components/cart/CartButton';
import { useBootstrap } from '~/utils';


const Header = (): JSX.Element => {
    useBootstrap('Offcanvas');

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
            <div className="container">
                <Link passHref href="/">
                    <a className="navbar-brand me-auto">
                        GROCERY SHOP
                    </a>
                </Link>

                <nav>
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
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                type="button"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <HeaderLinks />
                        </div>
                    </div>
                </nav>

                <CartButton className="btn btn-primary bg-dark position-relative align-self-end me-lg-0 me-4" />
            </div>
        </header>
    );
};

export default Header;
