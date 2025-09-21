'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductGrid = ({ data, sort_by }) => {
    const [products, setProducts] = useState(data)
    useEffect(() => {
        if (sort_by === 'az'){
            products.sort((a, b) => a.title.localeCompare(b.title)) 
        } else if (sort_by === 'za'){
            products.sort((a, b) => b.title.localeCompare(a.title)) 
        } else if (sort_by === 'lowest'){
            products.sort((a, b) => a.variants[0].price - b.variants[0].price)
        } else if (sort_by === 'highest'){
            products.sort((a, b) => b.variants[0].price - a.variants[0].price) 
        } else if (sort_by === 'date-ascending') {
            products.sort((a, b) => new Date(a.published_at) - new Date(b.published_at))
        } else if (sort_by === 'date-descending') {
            products.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)) 
        } else {
            return
        }
    }, [sort_by, products])
    
    return (
        <div className='grid grid-cols-5 mb-8 gap-5'>
            {products.map((product, index) => (
                <Link key={index} href={`/products/`+ product.handle} className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
                    <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
                    <img width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src={product.images[0]} alt='chair' />
                    <img width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src={product?.images[1] || product.images[0]} alt='chair' />
                    </div>
                    <div className='p-4'>
                    <div className='flex items-center justify-between mb-3 border-b border-[#e5e5e5] pb-3'>
                        <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#FBCD0A" stroke="none" strokeWidth={2} d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 0 1 .416 0c.521.11.843.911 1.485 2.512c.365.91.547 1.365.889 1.675q.145.13.31.23c.395.239.888.283 1.874.371c1.669.15 2.503.224 2.758.7a1 1 0 0 1 .106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 0 0-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 0 1-.824.508c-.382.019-.921-.42-2-1.299c-.71-.579-1.065-.868-1.459-.981a2 2 0 0 0-1.102 0c-.394.113-.75.402-1.46.981c-1.078.878-1.617 1.318-2 1.3a1 1 0 0 1-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 0 0-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 0 1 .106-.316c.255-.476 1.09-.55 2.758-.7c.986-.088 1.479-.132 1.873-.37a2 2 0 0 0 .31-.231c.343-.31.525-.765.89-1.675Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#FBCD0A" stroke="none" strokeWidth={2} d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 0 1 .416 0c.521.11.843.911 1.485 2.512c.365.91.547 1.365.889 1.675q.145.13.31.23c.395.239.888.283 1.874.371c1.669.15 2.503.224 2.758.7a1 1 0 0 1 .106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 0 0-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 0 1-.824.508c-.382.019-.921-.42-2-1.299c-.71-.579-1.065-.868-1.459-.981a2 2 0 0 0-1.102 0c-.394.113-.75.402-1.46.981c-1.078.878-1.617 1.318-2 1.3a1 1 0 0 1-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 0 0-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 0 1 .106-.316c.255-.476 1.09-.55 2.758-.7c.986-.088 1.479-.132 1.873-.37a2 2 0 0 0 .31-.231c.343-.31.525-.765.89-1.675Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#FBCD0A" stroke="none" strokeWidth={2} d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 0 1 .416 0c.521.11.843.911 1.485 2.512c.365.91.547 1.365.889 1.675q.145.13.31.23c.395.239.888.283 1.874.371c1.669.15 2.503.224 2.758.7a1 1 0 0 1 .106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 0 0-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 0 1-.824.508c-.382.019-.921-.42-2-1.299c-.71-.579-1.065-.868-1.459-.981a2 2 0 0 0-1.102 0c-.394.113-.75.402-1.46.981c-1.078.878-1.617 1.318-2 1.3a1 1 0 0 1-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 0 0-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 0 1 .106-.316c.255-.476 1.09-.55 2.758-.7c.986-.088 1.479-.132 1.873-.37a2 2 0 0 0 .31-.231c.343-.31.525-.765.89-1.675Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#FBCD0A" stroke="none" strokeWidth={2} d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 0 1 .416 0c.521.11.843.911 1.485 2.512c.365.91.547 1.365.889 1.675q.145.13.31.23c.395.239.888.283 1.874.371c1.669.15 2.503.224 2.758.7a1 1 0 0 1 .106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 0 0-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 0 1-.824.508c-.382.019-.921-.42-2-1.299c-.71-.579-1.065-.868-1.459-.981a2 2 0 0 0-1.102 0c-.394.113-.75.402-1.46.981c-1.078.878-1.617 1.318-2 1.3a1 1 0 0 1-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 0 0-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 0 1 .106-.316c.255-.476 1.09-.55 2.758-.7c.986-.088 1.479-.132 1.873-.37a2 2 0 0 0 .31-.231c.343-.31.525-.765.89-1.675Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#FBCD0A" stroke="none" strokeWidth={2} d="M10.307 7.22c.642-1.6.963-2.401 1.485-2.512a1 1 0 0 1 .416 0c.521.11.843.911 1.485 2.512c.365.91.547 1.365.889 1.675q.145.13.31.23c.395.239.888.283 1.874.371c1.669.15 2.503.224 2.758.7a1 1 0 0 1 .106.316c.085.533-.529 1.09-1.756 2.207l-.34.31c-.574.522-.86.783-1.026 1.108a2 2 0 0 0-.198.623c-.052.361.032.74.2 1.497l.06.27c.301 1.358.452 2.037.264 2.37a1 1 0 0 1-.824.508c-.382.019-.921-.42-2-1.299c-.71-.579-1.065-.868-1.459-.981a2 2 0 0 0-1.102 0c-.394.113-.75.402-1.46.981c-1.078.878-1.617 1.318-2 1.3a1 1 0 0 1-.823-.509c-.188-.333-.037-1.012.264-2.37l.06-.27c.168-.757.252-1.136.2-1.497a2 2 0 0 0-.198-.623c-.166-.325-.452-.586-1.026-1.108l-.34-.31c-1.227-1.116-1.84-1.674-1.756-2.207a1 1 0 0 1 .106-.316c.255-.476 1.09-.55 2.758-.7c.986-.088 1.479-.132 1.873-.37a2 2 0 0 0 .31-.231c.343-.31.525-.765.89-1.675Z"></path></svg>
                        </div>
                        <span className='bg-[#f83a3a] py-[2px] px-[10px] font-medium text-white text-[14px] rounded-full'>-10%</span>
                    </div>
                    <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>{product.title}</h3>
                    <div className='flex flex-col'>
                        <span className='text-[#10069f] font-medium mb-2 text-[26px]'>{parseInt(product.price.toString().slice(0,-2)).toLocaleString('vi-VN') + ' VND'}</span>
                        {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                        
                    </div>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                        <span className='text-sm'>Còn hàng</span>
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductGrid;