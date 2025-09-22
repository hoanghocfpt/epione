'use client'
import React, { useEffect, useState } from 'react';
import SortBy from './SortBy';
import ProductGrid from './ProductGrid';

const CollectionLayout = ({handle, filter, sort_by}) => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections/handle/` + handle)
        .then((res) => res.json())
        .then((data) => setProduct(data.product_data))
    }, [handle])

    return (
        <div className='max-w-screen-2xl mx-auto px-8'>
            <div>
                <span className='text-[44px] font-bold'>{product.length} sản phẩm</span>
            </div>
            <div className='flex items-center justify-between mt-8 mb-6'>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center justify-center py-[6px] px-[12px] border w-fit rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="#0000001a" strokeLinecap="round"><path d="M10 8h10M4 16h10"></path><circle cx={7} cy={8} r={3} transform="rotate(90 7 8)"></circle><circle cx={17} cy={16} r={3} transform="rotate(90 17 16)"></circle></g></svg>
                        <span className='text-[#10069f] ml-[8px] text-[16px] leading-none hover:underline'>Bộ lọc</span>
                    </div>
                    <div>
                        {filter && filter.map((item, index) =>(
                            <div key={index} className='flex items-center gap-2'>
                                <span className='text-[#282828] text-[14px] leading-none'>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <SortBy />
            </div>
            <ProductGrid data={product} sort_by={sort_by} />
        </div>
    );
};

export default CollectionLayout;