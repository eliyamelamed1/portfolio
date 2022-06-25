import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Pagination } from 'swiper';
import React from 'react';
import styles from '../styles/components/ImageSlider.module.scss';

interface PropTypes {
    videoArray: any[];
    image: string;
}

export default function ImageSlider({ videoArray, image }: PropTypes) {
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <i
                        style={{
                            width: '100%',
                        }}
                    >
                        <Image src={image} layout='responsive' width={16} height={9} alt='project' quality={100} />
                    </i>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
