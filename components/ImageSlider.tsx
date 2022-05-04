import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Pagination } from 'swiper';
import React from 'react';
import styles from '../styles/components/ImageSlider.module.scss';

interface PropTypes {
    imageArray: any[];
}

export default function ImageSlider({ imageArray }: PropTypes) {
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
                {imageArray.map((imageSrc, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <i>
                                <Image
                                    src={imageSrc}
                                    quality={100}
                                    layout='responsive'
                                    width={16}
                                    height={9}
                                    alt='project'
                                />
                            </i>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
