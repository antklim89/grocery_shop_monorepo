import ReactMarkdown from 'react-markdown';

import StrapiImage from '~/components/utils/StrapiImage';
import { IAbout } from '~/types';


const AboutUs = ({ image, body }: IAbout): JSX.Element => {
    return (
        <section className="container mb-5">
            <div className="row">
                <div className="col-lg">
                    <StrapiImage
                        alt="about"
                        height={600}
                        image={image}
                        objectFit="cover"
                        width={1000}
                    />
                </div>
                <div className="col-lg">
                    <ReactMarkdown>{body}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
