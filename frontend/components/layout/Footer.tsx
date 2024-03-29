

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-dark navbar mt-4">
            <div className="container flex text-white">
                <span>
                    &copy;{new Date().getFullYear()} Grocery shop
                </span>
                <span>
                    <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                        <i className="bi bi-twitter px-2 text-white" />
                    </a>
                    <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
                        <i className="bi bi-instagram px-2 text-white" />
                    </a>
                    <a href="http://telegram.com" rel="noopener noreferrer" target="_blank">
                        <i className="bi bi-telegram px-2 text-white" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
