import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from '@/lib/data'
const Collections = () => {
    const collections = data?.collections
    console.log(collections);
    
    return (
        <div className='max-w-screen-2xl mx-auto px-8 py-10'>
            <h2 className='text-[44px] font-bold text-center mb-6'>Danh mục sản phẩm</h2>
            <div className='grid grid-cols-4 gap-8'>
                {collections.map((item, index) => (
                    <Link key={index} href={'/collections/' + item.handle}>
                        <Image width={600} height={600} className='w-full mb-2' src={item.image} alt='chair' />
                        <h3 className='text-[20px] text-[#10069f] text-center font-bold'>{item.title}</h3>
                        <span className='block text-center text-[#929292] font-medium'>5 sản phẩm</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collections;