import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import React from 'react';
import styles from '../styles/components/ImageSlider.module.scss';

interface PropTypes {
    videoArray: any[];
}

export default function ImageSlider({ videoArray }: PropTypes) {
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
                {videoArray.map((imageSrc, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <video loop controls>
                                <source src={imageSrc} type='video/mp4' />
                            </video>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
