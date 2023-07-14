import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import StrapiImage from '~/components/common/StrapiImage';
import { getHero } from '~/requests';


const Hero = async () => {
    const { image, title, text } = await getHero();

    return (
        <section className="container-md">
            <div className="row">
                <div className="col-md-6 col-12 p-0 p-md-1 mb-2">
                    <StrapiImage
                        alt="hero"
                        className="img-fluid"
                        height={400}
                        image={image}
                        width={800}
                    />
                </div>
                <div className="col-md-6 col-12 p-0 p-md-1 mb-2 d-flex flex-column justify-content-center" style={{ textAlign: 'justify' }}>
                    <h1 className="text-center fs-1">{title}</h1>
                    <ReactMarkdown className="text-justify fs-4 mx-3">
                        {text}
                    </ReactMarkdown>
                    <Link passHref href="/product">
                        <button className="btn btn-outline-primary btn-lg d-block mx-auto" type="button">
                            Show Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
