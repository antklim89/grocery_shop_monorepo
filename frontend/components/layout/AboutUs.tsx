import LazyReactMarkdown from '~/components/utils/LazyReactMarkdown';
import StrapiImage from '~/components/utils/StrapiImage';
import { getAbout } from '~/requests';


const About = async () => {
    const { body, image } = await getAbout();

    return (
        <section className="container mb-5">
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
                    <LazyReactMarkdown>{body}</LazyReactMarkdown>
                </div>
            </div>
        </section>
    );
};

export default About;
