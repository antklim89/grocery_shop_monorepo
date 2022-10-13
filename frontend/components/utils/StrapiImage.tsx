import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { API_URL } from '~/constants';
import { IStrapiImage } from '~/types';


type Props = Omit<ImageProps, 'src'|'width'|'height'| 'blurDataURL'> & {
    image: IStrapiImage
    width: number
    height: number
}


const StrapiImage: FC<Props> = ({
    image,
    alt,
    ...props
}) => {

    return (
        <Image
            alt={alt}
            blurDataURL={image.placeholder}
            layout="responsive"
            placeholder="blur"
            src={`${API_URL}${image.url}`}
            {...props}
        />
    );
};

export default StrapiImage;
