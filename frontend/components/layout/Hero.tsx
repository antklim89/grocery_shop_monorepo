import Link from 'next/link';
import { memo } from 'react';
import ReactMarkdown from 'react-markdown';

import StrapiImage from '../utils/StrapiImage';

import { IHero } from '~/types';


const Hero = ({ image, title, text }: IHero): JSX.Element => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 col-12 mb-2">
                    <StrapiImage
                        alt="hero"
                        height={200}
                        image={image}
                        width={400}
                    />
                </div>
                <div className="col-md-6 col-12 mb-2">
                    <h1 className="text-center fs-1">{title}</h1>
                    <ReactMarkdown className="text-center d-none d-lg-block fs-4">
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

export default memo(Hero);
