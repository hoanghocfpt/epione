import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='max-w-screen-2xl relative px-8 mx-auto'>
        <div className='blur-lg absolute top-0 left-0 -z-10 w-full h-full'>
          <Image width={700} height={700} className='w-full' src='/banner-xmas.webp' alt='banner' />
        </div>
        <Image width={1000} height={1000} className='w-full translate-y-10 mb-10 rounded-3xl' src='/banner-xmas.webp' alt='banner' />
      </div>
      <div className='max-w-screen-2xl mx-auto px-8 py-10'>
        <h2 className='text-[44px] font-bold text-center mb-6'>Danh mục sản phẩm</h2>
        <div className='grid grid-cols-3 gap-8'>
          <Link href='/categories/ghe-cong-thai-hoc'>
            <Image width={300} height={300} className='w-full mb-2' src='/collection-ghe-cong-thai-hoc.webp' alt='chair' />
            <h3 className='text-[20px] text-[#10069f] text-center font-bold'>Ghế công thái học</h3>
            <span className='block text-center text-[#929292] font-medium'>5 sản phẩm</span>
          </Link>
          <Link href='/categories/ghe-cong-thai-hoc'>
            <Image width={300} height={300} className='w-full mb-2' src='/collection-ghe-cong-thai-hoc.webp' alt='chair' />
            <h3 className='text-[20px] text-[#10069f] text-center font-bold'>Ghế công thái học</h3>
            <span className='block text-center text-[#929292] font-medium'>5 sản phẩm</span>
          </Link>
          <Link href='/categories/ghe-cong-thai-hoc'>
            <Image width={300} height={300} className='w-full mb-2' src='/collection-ghe-cong-thai-hoc.webp' alt='chair' />
            <h3 className='text-[20px] text-[#10069f] text-center font-bold'>Ghế công thái học</h3>
            <span className='block text-center text-[#929292] font-medium'>5 sản phẩm</span>
          </Link>
        </div>
      </div>
      <div className='max-w-screen-2xl mx-auto px-8 py-10'>
        <h2 className='text-[44px] font-bold text-center mb-6'>Sắm combo - Nhận ưu đãi</h2>
        <div className='grid grid-cols-4 gap-7 mb-7'>
          <Link href='/categories/ghe-cong-thai-hoc' className='group rounded-3xl overflow-hidden border-[1px] border-[#e5e5e5] shadow-xl shadow-[#10069f1a]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
            </div>
            <div className='p-4 pt-0'>
              <div className='bg-[#10069f] rounded-full py-[4px] px-[14px] w-fit mx-auto -translate-y-1/2'>
                <span className='text-white font-medium text-[18px]'>COMBO</span>
              </div>
              <h3 className='text-[16px] group-hover:underline text-black text-center font-bold'>Setup Mark</h3>
              <div className='flex flex-col items-center'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span>
                <span className='bg-[#f83a3a] py-[2px] px-[10px] mb-3 font-medium text-white text-[14px] rounded-full'>-10%</span>
              </div>
              <div className='border-dashed rounded-2xl border border-[#d2d2d2] py-3 px-2'>
                <span className='text-sm text-center mb-2 block'>Sản phẩm bao gồm</span>
                <div className='flex items-center justify-center flex-wrap gap-1'>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Bàn</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Ghế công thái học</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Arm</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Kê chân</span>
                </div>
              </div>
              <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </Link>
            </div>
          </Link>
          <Link href='/categories/ghe-cong-thai-hoc' className='group rounded-3xl overflow-hidden border-[1px] border-[#e5e5e5] shadow-xl shadow-[#10069f1a]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
            </div>
            <div className='p-4 pt-0'>
              <div className='bg-[#10069f] rounded-full py-[4px] px-[14px] w-fit mx-auto -translate-y-1/2'>
                <span className='text-white font-medium text-[18px]'>COMBO</span>
              </div>
              <h3 className='text-[16px] group-hover:underline text-black text-center font-bold'>Setup Mark</h3>
              <div className='flex flex-col items-center'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span>
                <span className='bg-[#f83a3a] py-[2px] px-[10px] mb-3 font-medium text-white text-[14px] rounded-full'>-10%</span>
              </div>
              <div className='border-dashed rounded-2xl border border-[#d2d2d2] py-3 px-2'>
                <span className='text-sm text-center mb-2 block'>Sản phẩm bao gồm</span>
                <div className='flex items-center justify-center flex-wrap gap-1'>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Bàn</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Ghế công thái học</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Arm</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Kê chân</span>
                </div>
              </div>
              <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </Link>
            </div>
          </Link>
          <Link href='/categories/ghe-cong-thai-hoc' className='group rounded-3xl overflow-hidden border-[1px] border-[#e5e5e5] shadow-xl shadow-[#10069f1a]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
            </div>
            <div className='p-4 pt-0'>
              <div className='bg-[#10069f] rounded-full py-[4px] px-[14px] w-fit mx-auto -translate-y-1/2'>
                <span className='text-white font-medium text-[18px]'>COMBO</span>
              </div>
              <h3 className='text-[16px] group-hover:underline text-black text-center font-bold'>Setup Mark</h3>
              <div className='flex flex-col items-center'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span>
                <span className='bg-[#f83a3a] py-[2px] px-[10px] mb-3 font-medium text-white text-[14px] rounded-full'>-10%</span>
              </div>
              <div className='border-dashed rounded-2xl border border-[#d2d2d2] py-3 px-2'>
                <span className='text-sm text-center mb-2 block'>Sản phẩm bao gồm</span>
                <div className='flex items-center justify-center flex-wrap gap-1'>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Bàn</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Ghế công thái học</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Arm</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Kê chân</span>
                </div>
              </div>
              <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </Link>
            </div>
          </Link>
          <Link href='/categories/ghe-cong-thai-hoc' className='group rounded-3xl overflow-hidden border-[1px] border-[#e5e5e5] shadow-xl shadow-[#10069f1a]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
            </div>
            <div className='p-4 pt-0'>
              <div className='bg-[#10069f] rounded-full py-[4px] px-[14px] w-fit mx-auto -translate-y-1/2'>
                <span className='text-white font-medium text-[18px]'>COMBO</span>
              </div>
              <h3 className='text-[16px] group-hover:underline text-black text-center font-bold'>Setup Mark</h3>
              <div className='flex flex-col items-center'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span>
                <span className='bg-[#f83a3a] py-[2px] px-[10px] mb-3 font-medium text-white text-[14px] rounded-full'>-10%</span>
              </div>
              <div className='border-dashed rounded-2xl border border-[#d2d2d2] py-3 px-2'>
                <span className='text-sm text-center mb-2 block'>Sản phẩm bao gồm</span>
                <div className='flex items-center justify-center flex-wrap gap-1'>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Bàn</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Ghế công thái học</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Arm</span>
                  <span className='bg-[#e7e6f5] flex-shrink-0 text-black text-sm py-[3px] px-[10px] rounded-full'>Kê chân</span>
                </div>
              </div>
              <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </Link>
            </div>
          </Link>
        </div>
        <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto bg-[#10069f] border-white hover:border-[#10069f] rounded-xl py-[10px] px-[30px] flex justify-center items-center gap-1 text-[#fff] text-center font-medium'>
          <div className='group-hover:underline'>Xem tất cả</div>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"></path></svg>
        </Link>
      </div>
      <div className='w-52 h-52 bg-gray-200'></div>
      <div className='w-52 h-52 bg-gray-200'></div>
      <div className='w-52 h-52 bg-gray-200'></div>
    </>
  );
}
