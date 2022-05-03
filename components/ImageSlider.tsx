import 'swiper/css';
import 'swiper/css/pagination';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import zbite from '../assets/zbite.bmp';

interface PropTypes {
    imageArray: any[];
}

export default function ImageSlider({ imageArray }: PropTypes) {
    imageArray = [zbite.src, zbite.src];
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                {imageArray.map((imageSrc) => {
                    return (
                        <SwiperSlide>
                            <img src={imageSrc} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
