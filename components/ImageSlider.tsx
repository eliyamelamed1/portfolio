import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import React from 'react';

interface PropTypes {
    imageArray: any[];
}

export default function ImageSlider({ imageArray }: PropTypes) {
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
                {imageArray.map((imageSrc, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={imageSrc} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
