import 'bootstrap-icons/font/bootstrap-icons.css';
import '~/styles/globals.scss';
import 'core-js/features/object/from-entries';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';

import { ReactNode } from 'react';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';


const MyApp = ({ children }: {children: ReactNode}): JSX.Element => {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default MyApp;
