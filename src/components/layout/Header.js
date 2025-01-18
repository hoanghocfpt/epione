'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Drawer from '../common/CartDrawer';
import SearchDrawer from '../common/SearchDrawer';
const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <>
            <Drawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>giỏ hàng</Drawer>
            <div className='bg-[#282828] z-50 h-[32px] flex items-center justify-center text-center'>
                <Link href={'/contact'}>
                    <span className='text-white text-[14px] hover:underline'>Miễn phí vận chuyển và lắp đặt tại HN và HCM</span>
                </Link>
            </div>
            <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className='max-w-screen-2xl sticky top-0 z-50 bg-white mx-auto flex items-center justify-between p-4'>
                <Link href={'/'}>
                    <Image width={100} height={100} src='/logo.webp' alt='logo' />
                </Link>
                <div className='flex items-center gap-3'>
                    <Link href={'/collections/ghe-cong-thai-hoc'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Ghế công thái học</span>
                    </Link>
                    <Link href={'/collections/ghe-cong-thai-hoc'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Bàn Epione</span>
                    </Link>
                    <Link href={'/contact'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Phụ kiện</span>
                    </Link>
                    <Link href={'/contact'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Góc chia sẻ</span>
                    </Link>
                    <Link href={'/contact'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Hỗ trợ Khách hàng</span>
                    </Link>
                    
                </div>
                <div className='flex items-center gap-3'>
                    <div onClick={()=>setIsSearchOpen(true)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} className='hover:scale-105' viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx={11} cy={11} r={6}></circle><path strokeLinecap="round" d="m20 20l-3-3"></path></g></svg>
                    </div>
                    <Link href={'/account/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} className='hover:scale-105' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round"><circle cx={12} cy={8} r={3.5}></circle><path d="M4.85 16.948c.639-2.345 3.065-3.448 5.495-3.448h3.31c2.43 0 4.856 1.103 5.496 3.448a10 10 0 0 1 .295 1.553c.06.55-.394.999-.946.999h-13c-.552 0-1.005-.45-.946-.998a10 10 0 0 1 .295-1.554Z"></path></g></svg>
                    </Link>
                    <div onClick={()=>setIsFilterOpen(true)} className='cursor-pointer relative'>
                        <span className='w-4 h-4 flex justify-center items-center text-[10px] font-medium absolute -right-1 top-3 rounded-full bg-[#10069f] text-white'>0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} className='hover:scale-105' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="m10.5 15.5l-1-3.5m-1-7.5l-2 3m9-3l2 3m-4 8l1-3.5m-10-2.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m0 0h-15a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;