import { GetStaticProps } from 'next';

import AboutUs from '~/components/layout/AboutUs';
import Features from '~/components/layout/Features';
import Seo from '~/components/utils/Seo';
import { getAbout } from '~/requests';
import { getFeatures } from '~/requests/getFeatures';
import { IAbout, IFeature } from '~/types';


interface Props {
    about: IAbout
    features: IFeature[]
}

const AboutPage = ({ about, features }: Props): JSX.Element => {
    return (
        <>
            <Seo title="About Us" />
            <AboutUs {...about} />
            <Features features={features} />
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const [
        about,
        features,
    ] = await Promise.all([
        getAbout(),
        getFeatures(),
    ]);

    return { props: { about, features }, revalidate: 120 };
};

export default AboutPage;
