import { FC } from 'react';

import StrapiImage from '~/components/common/StrapiImage';
import { IStrapiImage } from '~/types';
import { cls } from '~/utils';


interface Props {
    images: IStrapiImage[];
}


const ProductCarousel: FC<Props> = ({ images }) => {
    return (
        <div className="carousel slide" data-bs-ride="carousel" id="images-carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        className={cls('carousel-item', index === 0 && 'active')}
                        key={image.id}
                    >
                        <StrapiImage
                            alt={`carousel-image-${index + 1}`}
                            height={720}
                            image={image}
                            width={1200}
                        />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev bg-transparent-25"
                data-bs-slide="prev"
                data-bs-target="#images-carousel"
                type="button"
            >
                <span aria-hidden className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next bg-transparent-25"
                data-bs-slide="next"
                data-bs-target="#images-carousel"
                type="button"
            >
                <span aria-hidden className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ProductCarousel;
