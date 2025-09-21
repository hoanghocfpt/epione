import Drawer from '@/components/common/Drawer';
import Image from 'next/image';
import data from '@/lib/data';
import Link from 'next/link';
import SortBy from '@/components/page-specific/collections/SortBy';
import ProductGrid from '@/components/page-specific/collections/ProductGrid';
// import { useState, use } from "react";
const CollectionsPage = async ({ params, searchParams }) => {
    const slug = params
    const data = await fetch('http://localhost:3000/api/products/collection/'+slug)
    const product = await data.json()
    const filter = searchParams.filter;
    const sort_by = searchParams.sort_by;
    console.log(slug, sort_by, filter);
    
    // const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <div>
            

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
        </div>
    );
};

export default CollectionsPage;