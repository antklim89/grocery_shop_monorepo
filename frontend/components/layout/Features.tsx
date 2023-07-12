import LazyReactMarkdown from '~/components/common/LazyReactMarkdown';
import StrapiImage from '~/components/common/StrapiImage';
import { getFeatures } from '~/requests';


const Features = async () => {
    const features = await getFeatures();

    return (
        <section className="mb-5 py-2 bg-dark text-white">
            <div className="container">
                <div className="row g-2">
                    {features.map(({ text, image, title, id }) => (
                        <div className="col-12 col-md-6 col-xl-4 align-items-stretch" key={id}>
                            <section className="card bg-white text-dark h-100">
                                <StrapiImage
                                    alt={title}
                                    className="card-img-top"
                                    height={198}
                                    image={image}
                                    width={400}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title text-center text-uppercase">{title}</h3>
                                    <LazyReactMarkdown className="card-text mt-auto">{text}</LazyReactMarkdown>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
