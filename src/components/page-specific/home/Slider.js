'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
// efect fade
import 'swiper/css';
const Slider = () => {
    const data = [
        '/promotion-khai-hoa-t4.webp',
        '/epione-website-banner.webp',
        '/epione-smartdesk-mono-launch-banner.webp',
        '/banner-xmas.webp',
        '/meo-lam-viec-khong-dau-lung-thumb.webp',
        '/mini-game-banner.webp',
        '/promo-banner.webp',
        '/promotion-t2-banner.webp',
        '/elyschair-valentine-banner.webp',
        '/banner-combo-anh-ngu.webp',
    ]
    const swiperRef = useRef();
    return (
        <div className='max-w-screen-2xl relative px-8 mx-auto'>
            <div className='blur-lg absolute top-0 left-0 -z-10 w-full h-full'>
                <Image width={700} height={700} className='w-full' src='/banner-xmas.webp' alt='banner' />
            </div>
            <Swiper
                id='gallery'
                spaceBetween={0}
                effect={'fade'}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}

                navigation={true}
                modules={[Autoplay, EffectFade, Navigation]}
                >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            >
                        <Image width={1000} height={400} className='w-full translate-y-10 mb-10 rounded-3xl' src={item} alt='banner' />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={() => swiperRef.current.slidePrev()} className='hidden lg:block border border-[#10069f] select-none w-10 h-10 bg-white group hover:bg-[#10069f] z-40 absolute top-[300px] left-3 transition-all cursor-pointer p-2 rounded-lg'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <path
                    className='group-hover:fill-[#fff]'
                    fill='#10069f'
                    fillRule='evenodd'
                    d='M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0'
                    clipRule='evenodd'
                    ></path>
                </svg>
            </div>
            <div onClick={() => swiperRef.current.slideNext()} className='hidden lg:block border border-[#10069f] select-none w-10 h-10 bg-white group hover:bg-[#10069f] z-40 absolute top-[300px] right-3 transition-all cursor-pointer p-2 rounded-lg'>
                <svg className='' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <path
                    className='group-hover:fill-[#fff]'
                    fill='#10069f'
                    fillRule='evenodd'
                    d='M8.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L14.586 12 8.293 5.707a1 1 0 0 1 0-1.414'
                    clipRule='evenodd'
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Slider;