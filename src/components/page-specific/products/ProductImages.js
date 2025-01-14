'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';

const ProductImages = () => {
    const data = [
        '/ban-nang-ha-epione-smartdesk-lite-20-110457.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-220696.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-647614.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-661700.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-749794.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-976505.webp',
    ]
    const swiperRef = useRef();
    const swiperRef2 = useRef();
    const [thumbnailRef, setThumbnailRef] = useState(0);
    const handleThumbnailClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index, 500);
            swiperRef2.current.slideTo(index, 500);
        }
    };
    return (
        <div className='sticky top-[72px] bg-white h-fit'>
            <div className='relative flex items-center'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => {
                        setThumbnailRef(swiperRef.current.activeIndex)
                        swiperRef2.current.slideTo(swiperRef.current.activeIndex, 500)
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className='w-full h-full object-cover' src={item} alt={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div onClick={() => swiperRef.current.slidePrev()} className='hidden lg:block border border-[#10069f] select-none w-10 h-10 bg-white group hover:bg-[#10069f] z-40 absolute left-3 transition-all cursor-pointer p-2 rounded-lg'>
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
                <div onClick={() => swiperRef.current.slideNext()} className='hidden lg:block border border-[#10069f] select-none w-10 h-10 bg-white group hover:bg-[#10069f] z-40 absolute right-3 transition-all cursor-pointer p-2 rounded-lg'>
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
            <div className='pt-4'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef2.current = swiper;
                    }}
                    spaceBetween={14}
                    slidesPerView={5.7}
                    onSlideChange={() => console.log('slide change')}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode]}
                    >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div onClick={()=>handleThumbnailClick(index)} className={`max-w-[110px] rounded-xl overflow-hidden border ${thumbnailRef === index ? `border-[#10069f] opacity-100` : `borrder-tranparent opacity-[.6]`} cursor-pointer`}>
                                <img className='w-full h-full object-cover' src={item} alt={item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImages;