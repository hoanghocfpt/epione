import Link from 'next/link';
import ProductImages from '@/components/page-specific/products/ProductImages';
import data from '@/lib/data'
import Options from '@/components/page-specific/products/Options';
import Information from '@/components/page-specific/products/Information';
import ParentOption from '@/components/page-specific/products/ParentOption';
const ProductsPage = ({ params, searchParams }) => {
    const slug = params.slug;
    const variant = searchParams.variant;
    const product  = data?.products.find(item => item.handle === slug)
    
    return (
        <div>
            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0]'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m9 6l6 6l-6 6"></path></svg>
                <span className='text-xs text-[#282828]'>Ghế công thái học</span>
            </div>
            <ParentOption product={product} variantQ={variant}></ParentOption>
            <Information data={product} />
        </div>
    );
};

export default ProductsPage;