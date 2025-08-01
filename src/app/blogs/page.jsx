import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <>
            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0]'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m9 6l6 6l-6 6"></path></svg>
                <span className='text-xs text-[#282828]'>Góc chia sẻ</span>
            </div>
            <div className='py-[40px] px-[32px] grid gap-[28px]' style={{ gridTemplateColumns: 'calc(100% - 400px) fit-content(400px)' }}>
                <div className=''>
                    <div className=''>
                        <h2 className='text-[24px] text-[#10069f] font-bold mb-6'>Công thái học</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-7'>
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                    <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                    <div className=''>
                        <h2 className='text-[24px] text-[#10069f] font-bold mb-6'>Công thái học</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-7'>
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                    <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                            <Link href='/blogs/ghe-cong-thai-hoc' className='group rounded-2xl overflow-hidden border-[1px] border-[#e5e5e5] hover:shadow-xl transition-all duration-200'>
                                <div className='transition-transform aspect-[526/316] relative overflow-hidden'>
                                <Image width={1000} height={1000} className='absolute top-0 w-full mb-2 h-full object-cover' src='/co-nen-dau-tu-cho-minh-mot-chiec-ban-nang-ha-314212.webp' alt='chair' />
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
                </div>
                <div className=''>
                    <div className='py-[20px]'>
                        <h3 className='text-sm text-[#282828] font-bold'>Danh mục</h3>
                        <ul className='pl-[24px]'>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/cong-nghe'>Công nghệ</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/cong-thai-hoc'>Công thái học</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/goc-setup'>Góc Setup</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/huong-dan'>Hướng dẫn</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/moi-truong-lam-viec'>Môi trường làm việc</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/noi-that'>Nội thất</Link>
                            </li>
                            <li className='list-disc text-sm mt-[12px] text-[#282828]'>
                                <Link href='/blogs/van-phong-tai-nha'>Văn phòng tại nhà</Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <div className='py-[20px]'>
                        <h3 className='text-sm text-[#282828] font-bold'>TIN TỨC NỔI BẬT</h3>
                    </div>
                    <div className='py-[20px]'>
                        <h3 className='text-sm text-[#282828] font-bold mb-[12px]'>TAGS</h3>
                        <div className='flex flex-wrap gap-2'>
                            <span className='inline-flex border rounded-[4px] px-[12px] leading-4 py-[6px] border-[#10069f]'>
                                <Link href='/blogs/filter/tagged/cong-thai-hoc' className='text-xs text-[#10069f] font-medium'>Công thái học</Link>
                            </span>
                            <span className='inline-flex border rounded-[4px] px-[12px] leading-4 py-[6px] border-[#10069f]'>
                                <Link href='/blogs/filter/tagged/cong-nghe' className='text-xs text-[#10069f] font-medium'>Công nghệ</Link>
                            </span>
                            <span className='inline-flex border rounded-[4px] px-[12px] leading-4 py-[6px] border-[#10069f]'>
                                <Link href='/blogs/filter/tagged/goc-setup' className='text-xs text-[#10069f] font-medium'>Góc Setup</Link>
                            </span>
                            <span className='inline-flex border rounded-[4px] px-[12px] leading-4 py-[6px] border-[#10069f]'>
                                <Link href='/blogs/filter/tagged/huong-dan' className='text-xs text-[#10069f] font-medium'>Hướng dẫn</Link>
                            </span>
                            <span className='inline-flex border rounded-[4px] px-[12px] leading-4 py-[6px] border-[#10069f]'>
                                <Link href='/blogs/filter/tagged/moi-truong-lam-viec' className='text-xs text-[#10069f] font-medium'>Môi trường làm việc</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default BlogsPage;