'use client'
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const ProductsPage = () => {
    const data = [
        '/ban-nang-ha-epione-smartdesk-lite-20-110457.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-220696.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-647614.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-661700.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-749794.webp',
        '/ban-nang-ha-epione-smartdesk-lite-20-976505.webp',
    ]
    return (
        <div>
            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0]'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m9 6l6 6l-6 6"></path></svg>
                <span className='text-xs text-[#282828]'>Ghế công thái học</span>
            </div>
            <div className='max-w-screen-2xl mx-auto px-8 grid grid-cols-2 gap-[24px] py-8'>
                <div className=''>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={true} modules={[Navigation]}
                        >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img className='w-full h-full object-cover' src={item} alt={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='pl-7 py-3'>
                    <h1 className='text-[#10069f] text-[34px] font-semibold mb-3'>Bàn nâng hạ Epione SmartDesk Lite 2.0</h1>
                    <div className='flex items-center gap-1 mb-2'>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                        </div>
                        <span className='text-[#282828]'>8 đánh giá</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-[#10069f] font-semibold mb-2 text-[26px]'>3.590.000 VND</span>
                        <span className='text-[#929292] font-medium text-[18px] mb-1 line-through'>2.000.000 VND</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;