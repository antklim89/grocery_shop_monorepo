import LazyReactMarkdown from '~/components/utils/LazyReactMarkdown';
import StrapiImage from '~/components/utils/StrapiImage';
import { IFeature } from '~/types';


interface FeaturesProps {
    features: IFeature[];
}

const Features = ({ features }: FeaturesProps): JSX.Element => {
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
                                    objectFit="cover"
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
