'use client'
import Drawer from '@/components/common/Drawer';
import Image from 'next/image';
import data from '@/lib/data';
import Link from 'next/link';
import { useState } from "react";
const CollectionsPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <div>
            <Drawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
                {/* <h2 className="text-lg font-bold">Bộ lọc sản phẩm</h2>
                <form>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Giá</label>
                    <input type="range" className="mt-2 w-full" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Danh mục</label>
                    <select className="mt-2 w-full border rounded">
                        <option value="all">Tất cả</option>
                        <option value="electronics">Điện tử</option>
                        <option value="furniture">Nội thất</option>
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                    Áp dụng
                    </button>
                </form> */}
            </Drawer>

            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0]'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m9 6l6 6l-6 6"></path></svg>
                <span className='text-xs text-[#282828]'>Ghế công thái học</span>
            </div>
            <div className='max-w-screen-2xl mx-auto pt-[40px] pb-[52px]'>
                <div className='max-w-[83.3333%] mx-auto'>
                    <h1 className='text-[44px] font-bold mt-8 text-center'>Ghế công thái học Epione - Chuẩn dáng thành công</h1>
                    <p className='text-[16px] font-medium text-[#282828] mt-4 text-center'>Ghế công thái học Epione - kết tinh của sự đam mê sáng tạo với sản phẩm công thái học dành riêng cho người Việt. Với thiết kế hiện đại cùng những công nghệ tối ưu, mỗi chiếc ghế của Epione chắc chắn sẽ mang đến những trải nghiệm thú vị, giúp nâng cao chất lượng sống và làm việc của người dùng.</p>
                </div>
            </div>
            <div className='max-w-screen-2xl mx-auto px-8'>
                <div>
                    <span className='text-[44px] font-bold'>{data.products.length} sản phẩm</span>
                </div>
                <div className='flex items-center justify-between mt-8 mb-6'>
                    <div onClick={() => setIsFilterOpen(true)} className='flex items-center justify-center py-[6px] px-[12px] border w-fit rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="#0000001a" strokeLinecap="round"><path d="M10 8h10M4 16h10"></path><circle cx={7} cy={8} r={3} transform="rotate(90 7 8)"></circle><circle cx={17} cy={16} r={3} transform="rotate(90 17 16)"></circle></g></svg>
                        <span className='text-[#10069f] ml-[8px] text-[16px] leading-none hover:underline'>Bộ lọc</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-[#929292] text-[14px] mr-[14px]'>Sắp xếp theo:</span>
                        <div className='border rounded-lg cursor-pointer flex items-center overflow-hidden relative'>
                            <select className='py-[6px] px-[12px] pr-[32px] outline-none text-[#282828] text-[14px] appearance-none'>
                                <option>Bán chạy nhất</option>
                                <option>Thứ tự bảng chữ cái (từ A-Z)</option>
                                <option>Thứ tự bảng chữ cái (từ Z-A)</option>
                                <option>Giá (tăng dần)</option>
                                <option>Giá (giảm dần)</option>
                                <option>Ngày (từ cũ đến mới)</option>
                                <option>Ngày (từ mới đến cũ)</option>
                            </select>
                            <svg className='absolute right-2' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m18 9l-6 6l-6-6"></path></svg>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5 mb-8 gap-5'>
                    {data.products.map((product, index) => (
                        <Link key={index} href={`/products/`+ product.handle} className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
                            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
                            <img width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src={product.images[1]} alt='chair' />
                            <img width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src={product.images[0]} alt='chair' />
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
            </div>
        </div>
    );
};

export default CollectionsPage;