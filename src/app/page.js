import Slider from '@/components/page-specific/home/Slider';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/lib/data'
import Collections from '@/components/page-specific/home/Collections';
export default function Home() {
  return (
    <>
      <Slider />
      <Collections/>
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
              <div className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </div>
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
              <div className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </div>
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
              <div className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </div>
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
              <div className='border-[1.5px] w-fit mx-auto hover:bg-[#10069f] hover:text-white border-[#10069f] rounded-full py-2 px-4 mt-4 block text-[#10069f] text-center font-medium'>
                <div className='group-hover:underline'>Chi tiết COMBO</div>
              </div>
            </div>
          </Link>
        </div>
        <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto bg-[#10069f] border-white hover:border-[#10069f] rounded-xl py-[10px] px-[30px] flex justify-center items-center gap-1 text-[#fff] text-center font-medium'>
          <div className='group-hover:underline'>Xem tất cả</div>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"></path></svg>
        </Link>
      </div>
      <div className='max-w-screen-2xl mx-auto px-4 md:px-8 py-10'>
        <h2 className='text-[44px] font-bold text-center mb-6'>Sản phẩm nổi bật</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-7 mb-7'>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
          <Link href='/products/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[4/3] relative overflow-hidden'>
              <Image width={500} height={500} className='absolute top-0 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 w-full mb-2 h-full object-cover' src='/pic10.jpg' alt='chair' />
              <Image width={500} height={500} className='absolute top-0 duration-500 group-hover:scale-100 opacity-100 group-hover:opacity-0 w-full mb-2 h-full object-cover' src='/pic5.jpg' alt='chair' />
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
              <h3 className='text-[20px] group-hover:underline mb-2 text-[#10069f] font-bold'>Ghế công thái học Epione FortisChair 2.0</h3>
              <div className='flex flex-col'>
                <span className='text-[#10069f] font-medium mb-2 text-[26px]'>1.500.000 VND</span>
                {/* <span className='text-[#929292] font-medium text-[14px] mb-1 line-through'>2.000.000 VND</span> */}
                
              </div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke={'#00a341'} strokeLinecap="round" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"></path></svg>
                <span className='text-sm'>Còn hàng</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='max-w-screen-2xl mx-auto px-4 md:px-8 py-10'>
        <h2 className='text-[44px] font-bold text-center mb-6'>Góc chia sẻ</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-7'>
          <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
              <Image width={1000} height={1000} className='absolute top-0 transition-all duration-500 group-hover:scale-105 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
            </div>
            <div className='p-4'>
              <div className='flex items-center justify-between mb-3 border-b border-[#e5e5e5] pb-3'>
                <span className='text-sm text-[#929292] font-medium'>8 Tháng 4, 2024</span>
                <span className='text-sm text-[#929292] font-medium'>Công thái học</span>
              </div>
              <h3 className='text-[18px] group-hover:underline mb-2 text-[#121212] font-bold'>Có nên đầu tư cho mình một chiếc Bàn nâng hạ?</h3>
              <p className='line-clamp-4 text-[#929292] mb-3 font-medium'>Bàn nâng hạ là gì? Nó có thực sự tạo ra sự khác biệt trong cách chúng ta cảm nhận và trải nghiệm làm việc, là một tương lai tươi...</p>
              <div className='flex items-center gap-2'>
                <span className='text-[#10069f]  font-bold'>Xem chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#10069f" d="m18 12l.707-.707l.707.707l-.707.707zM6 13a1 1 0 1 1 0-2zm8.707-5.707l4 4l-1.414 1.414l-4-4zm4 5.414l-4 4l-1.414-1.414l4-4zM18 13H6v-2h12z"></path></svg>
              </div>
            </div>
          </Link>
          <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
              <Image width={1000} height={1000} className='absolute top-0 transition-all duration-500 group-hover:scale-105 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
            </div>
            <div className='p-4'>
              <div className='flex items-center justify-between mb-3 border-b border-[#e5e5e5] pb-3'>
                <span className='text-sm text-[#929292] font-medium'>8 Tháng 4, 2024</span>
                <span className='text-sm text-[#929292] font-medium'>Công thái học</span>
              </div>
              <h3 className='text-[18px] group-hover:underline mb-2 text-[#121212] font-bold'>Có nên đầu tư cho mình một chiếc Bàn nâng hạ?</h3>
              <p className='line-clamp-4 text-[#929292] mb-3 font-medium'>Bàn nâng hạ là gì? Nó có thực sự tạo ra sự khác biệt trong cách chúng ta cảm nhận và trải nghiệm làm việc, là một tương lai tươi...</p>
              <div className='flex items-center gap-2'>
                <span className='text-[#10069f]  font-bold'>Xem chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#10069f" d="m18 12l.707-.707l.707.707l-.707.707zM6 13a1 1 0 1 1 0-2zm8.707-5.707l4 4l-1.414 1.414l-4-4zm4 5.414l-4 4l-1.414-1.414l4-4zM18 13H6v-2h12z"></path></svg>
              </div>
            </div>
          </Link>
          <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5]'>
            <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
              <Image width={1000} height={1000} className='absolute top-0 transition-all duration-500 group-hover:scale-105 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
            </div>
            <div className='p-4'>
              <div className='flex items-center justify-between mb-3 border-b border-[#e5e5e5] pb-3'>
                <span className='text-sm text-[#929292] font-medium'>8 Tháng 4, 2024</span>
                <span className='text-sm text-[#929292] font-medium'>Công thái học</span>
              </div>
              <h3 className='text-[18px] group-hover:underline mb-2 text-[#121212] font-bold'>Có nên đầu tư cho mình một chiếc Bàn nâng hạ?</h3>
              <p className='line-clamp-4 text-[#929292] mb-3 font-medium'>Bàn nâng hạ là gì? Nó có thực sự tạo ra sự khác biệt trong cách chúng ta cảm nhận và trải nghiệm làm việc, là một tương lai tươi...</p>
              <div className='flex items-center gap-2'>
                <span className='text-[#10069f]  font-bold'>Xem chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#10069f" d="m18 12l.707-.707l.707.707l-.707.707zM6 13a1 1 0 1 1 0-2zm8.707-5.707l4 4l-1.414 1.414l-4-4zm4 5.414l-4 4l-1.414-1.414l4-4zM18 13H6v-2h12z"></path></svg>
              </div>
            </div>
          </Link>
        </div>
        <Link href='/categories/ghe-cong-thai-hoc' className='border-[1.5px] w-fit mx-auto bg-[#10069f] border-white hover:border-[#10069f] rounded-xl py-[10px] px-[30px] flex justify-center items-center gap-1 text-[#fff] text-center font-medium'>
          <div className='group-hover:underline'>Xem tất cả</div>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"></path></svg>
        </Link>
      </div>
    </>
  );
}
