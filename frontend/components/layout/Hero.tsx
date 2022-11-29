import Link from 'next/link';
import { memo } from 'react';

import LazyReactMarkdown from '~/components/utils/LazyReactMarkdown';
import StrapiImage from '~/components/utils/StrapiImage';
import { IHero } from '~/types';


const Hero = ({ image, title, text }: IHero): JSX.Element => {
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
                <div className="col-md-6 col-12 p-0 p-md-1 mb-2 d-flex flex-column justify-content-center">
                    <h1 className="text-center fs-1">{title}</h1>
                    <LazyReactMarkdown className="text-center d-none d-lg-block fs-4">
                        {text}
                    </LazyReactMarkdown>
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

export default memo(Hero);
