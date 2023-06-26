import 'bootstrap-icons/font/bootstrap-icons.css';
import '~/styles/globals.scss';
import 'core-js/features/object/from-entries';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default MyApp;
