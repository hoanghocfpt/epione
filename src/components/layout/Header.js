import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='bg-[#282828] h-[32px] flex items-center justify-center text-center'>
                <Link href={'/contact'}>
                    <span className='text-white text-[14px] hover:underline'>Miễn phí vận chuyển và lắp đặt tại HN và HCM</span>
                </Link>
            </div>
            <div className='max-w-screen-2xl mx-auto flex items-center justify-between p-4'>
                <Image width={100} height={100} src='/logo.webp' alt='logo' />
                <div className='flex items-center gap-3'>
                    <Link href={'/'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Ghế công thái học</span>
                    </Link>
                    <Link href={'/products'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Bàn Epione</span>
                    </Link>
                    <Link href={'/contact'}>
                        <span className='text-[16px] flex justify-center items-center text-[#000000bf] font-bold py-[8px] px-[20px] rounded-xl transition-all hover:text-[#10069f] hover:bg-[#10069f24]'>Phụ kiện</span>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;