import Link from 'next/link';

import HeaderLinks from './HeaderLinks';

import CartButton from '~/components/cart/CartButton';


const Header = async () => {
    return (
        <header >
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-dark">
                <div className="container">
                    <Link passHref className="navbar-brand me-auto" href="/">
                        GROCERY SHOP
                    </Link>
                    <CartButton className="d-block d-lg-none" />
                    <button
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarToggler"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <HeaderLinks />
                    <CartButton className="d-none d-lg-block" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
