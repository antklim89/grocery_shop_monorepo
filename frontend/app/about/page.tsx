import { Metadata } from 'next';

import About from '~/components/layout/AboutUs';
import Features from '~/components/layout/Features';


export const metadata: Metadata = {
    title: 'About Us',
};

const AboutPage = () => {
    return (
        <>
            <About />
            <Features />
        </>
    );
};


export default AboutPage;
