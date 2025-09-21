import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {

    return (
        <div>
            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0] gap-2'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} viewBox='0 0 24 24'><path fill='none' stroke='currentColor' d='m9 6l6 6l-6 6'></path></svg>
                <span className='text-xs text-[#282828]'>Tạo tài khoản</span>
            </div>
            <div className='w-[480px] mx-auto mt-16 flex flex-col items-center'>
                <Image src='/404.webp' className='w-full max-w-[300px]' width={400} height={400} alt='404' />
                <h1 className='text-[24px] font-bold text-center mb-4'>Rất tiếc, không tìm thấy trang!</h1>
                <p className='text-[#929292] text-center'>Trang đã bị gỡ bỏ hoặc đường link không đúng.</p>
                <Link href={'/'} className='bg-[#10069f] text-white h-[46px] leading-none flex justify-center items-center px-[24px] rounded-xl mt-[24px] mb-10'>Về trang chủ</Link>
            </div>
        </div>
    )
}

export default NotFoundPage;