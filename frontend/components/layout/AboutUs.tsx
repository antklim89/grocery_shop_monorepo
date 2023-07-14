import ReactMarkdown from 'react-markdown';

import StrapiImage from '~/components/common/StrapiImage';
import { getAbout } from '~/requests';


const About = async () => {
    const { body, image } = await getAbout();

    return (
        <section className="container my-4">
            <div className="row">
                <div className="col-lg-6">
                    <StrapiImage
                        alt="about"
                        height={400}
                        image={image}
                        width={600}
                    />
                </div>
                <div className="col-lg-6">
                    <ReactMarkdown>{body}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
};

export default About;
