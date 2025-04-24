import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#282828] md:pt-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-8 pb-16'>
                <div>
                    <div className='mb-7'>
                        <Image width={180} height={130} src='/logo-white.avif' alt='logo' />
                    </div>
                    <ul>
                        <li className='text-white flex gap-3 pb-4'>
                            <svg className='flex-shrink-0' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24'><g fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth={1.5}><path d='M6.4 4.76a7.92 7.92 0 0 1 11.2 11.2l-4.186 4.186a2 2 0 0 1-2.828 0L6.4 15.96a7.92 7.92 0 0 1 0-11.2Z'></path><circle cx={12} cy={10.36} r={3} strokeLinecap='round'></circle></g></svg>
                            <div>
                                <p>Công ty Cổ phần Siliconz</p>
                                <p className='font-bold'><strong className='font-extrabold'>Giấy phép DKKD</strong> số 0316012611</p>
                                <p className='font-bold'><strong className='font-extrabold'>Nơi cấp:</strong> Chi cục Thuế Quận Tân Bình</p>
                                <p className='font-bold'><strong className='font-extrabold'>Ngày cấp:</strong> 12/11/2019</p>
                                <p className='font-bold'><strong className='font-extrabold'>Địa chỉ:</strong> 1073/63B Đường Cách Mạng Tháng Tám, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh</p>
                                <p className='font-bold'><strong className='font-extrabold'>Showroom:</strong> 100 Hoa Lan, Phường 2, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
                                <p className='font-bold'><strong className='font-extrabold'>Email:</strong> hotro@epione.vn</p>
                            </div>
                        </li>
                        <li className='text-white flex gap-3 pb-4'>
                        <svg className='flex-shrink-0' xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 256 256'><path fill='currentColor' d='M146.2 46.45a6 6 0 0 1 7.35-4.25a84.24 84.24 0 0 1 60.25 60.25a6 6 0 0 1-4.25 7.35a6 6 0 0 1-1.55.2a6 6 0 0 1-5.8-4.45a72.34 72.34 0 0 0-51.75-51.75a6 6 0 0 1-4.25-7.35m-3.75 39.35C157 89.68 166.32 99 170.2 113.55A6 6 0 0 0 176 118a6 6 0 0 0 1.55-.2a6 6 0 0 0 4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6 6 0 1 0-3.1 11.6m79.44 97A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.25 54.25 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.39l21.1 47.1a14 14 0 0 1-1.12 13.28a6 6 0 0 1-.42.57l-21.07 25.06a1.89 1.89 0 0 0 0 1.67c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.53ZM210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.24 42.24 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68'></path></svg>
                            <div>
                                <p>HOTLINE</p>
                                <p><strong className='font-extrabold'>1900 3471</strong></p>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <div className='flex items-center gap-3'>
                            <a href='' className='bg-[#ffffff1a] rounded-md group size-[40px] flex justify-center items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='group-hover:scale-110 transition-all' width={18} height={18} viewBox='0 0 24 24'><path fill='#fff' d='M17.234 2.25H6.744a4.5 4.5 0 0 0-3.198 1.33A4.47 4.47 0 0 0 2.25 6.778v10.444a4.46 4.46 0 0 0 1.296 3.198a4.5 4.5 0 0 0 3.197 1.33h4.763v-6.966h-1.82a.43.43 0 0 1-.427-.425v-2.236a.435.435 0 0 1 .438-.436h1.809v-2.18a3.54 3.54 0 0 1 .996-2.826a3.57 3.57 0 0 1 2.811-1.065h1.854a.43.43 0 0 1 .427.436v1.89a.424.424 0 0 1-.427.424h-1.123c-1.236 0-1.472.582-1.472 1.431v1.879h2.696a.428.428 0 0 1 .427.48l-.27 2.237a.424.424 0 0 1-.427.38h-2.415v6.966h2.674a4.5 4.5 0 0 0 3.197-1.33a4.47 4.47 0 0 0 1.296-3.199V6.778a4.45 4.45 0 0 0-1.304-3.206a4.5 4.5 0 0 0-3.212-1.322'></path></svg>
                            </a>
                            <a href='' className='bg-[#ffffff1a] rounded-md group size-[40px] flex justify-center items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='group-hover:scale-110 transition-all' width={18} height={18} viewBox='0 0 24 24'><path fill='#fff' fillRule='evenodd' d='M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89' clipRule='evenodd'></path></svg>
                            </a>
                            <a href='' className='bg-[#ffffff1a] rounded-md group size-[40px] flex justify-center items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='group-hover:scale-110 transition-all' width={18} height={18} viewBox='0 0 24 24'><path fill='#fff' d='M22 11.939a26.5 26.5 0 0 0-.41-4.801a2.5 2.5 0 0 0-1.803-1.714a61 61 0 0 0-7.81-.41c-2.609-.03-5.217.11-7.808.42a2.52 2.52 0 0 0-1.76 1.76a26.4 26.4 0 0 0-.408 4.8c-.01 1.61.127 3.216.409 4.8a2.56 2.56 0 0 0 1.78 1.782c2.592.303 5.2.44 7.81.409a59 59 0 0 0 7.787-.41a2.52 2.52 0 0 0 1.759-1.758c.307-1.608.46-3.242.454-4.878m-7.411.582l-4.005 2.271a.53.53 0 0 1-.785-.464V9.616a.52.52 0 0 1 .785-.454l4.137 2.378a.52.52 0 0 1-.022.908z'></path></svg>
                            </a>
                            <a href='' className='bg-[#ffffff1a] rounded-md group size-[40px] flex justify-center items-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='group-hover:scale-110 transition-all' width={18} height={18} viewBox='0 0 24 24'><path fill='#fff' d='M20.357 7.75a.537.537 0 0 0-.495-.516a4.7 4.7 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.54.54 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.27 5.27 0 0 0-4.101 1.93a5.8 5.8 0 0 0-1.37 2.52a5.86 5.86 0 0 0 2.14 6.072A5.93 5.93 0 0 0 9.591 21.5q.451 0 .896-.063A5.95 5.95 0 0 0 13.8 19.78a5.84 5.84 0 0 0 1.75-4.133V8.71a7.84 7.84 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z'></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className='uppercase text-[#fff9] mb-2'>Thời gian hoạt động</h5>
                        <ul>
                            <li className='text-white border-b-[1px] mb-4 pb-4 border-[#ffffff34]'>
                                <p className='font-bold'>Thứ 2 - Thứ 6</p>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <p>Sáng</p>
                                        <p className='font-bold'>09h00 - 12h30</p>
                                    </div>
                                    <div>
                                        <p>Chiều</p>
                                        <p className='font-bold'>13h30 - 20h00</p>
                                    </div>
                                </div>
                            </li>
                            <li className='text-white'>
                                <p className='font-bold'>Thứ 7 - CN</p>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <p>Sáng</p>
                                        <p className='font-bold'>09h00 - 12h30</p>
                                    </div>
                                    <div>
                                        <p>Chiều</p>
                                        <p className='font-bold'>13h30 - 20h00</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='pt-5'>
                        <h5 className='text-[#fff9] mb-2'>Phương thức thanh toán</h5>
                        <div>
                            <Image src={'/image_236.webp'} width={240} height={100} alt=''/>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className='uppercase text-[#fff9] mb-2'>Chính sách</h5>
                    <ul>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chính sách bảo hành</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chính sách đổi trả và hoàn tiền</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chính sách giao hàng</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chính sách thanh toán</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Điều khoản sử dụng website</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chính sách bảo mật thông tin</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Khách hàng doanh nghiệp (B2B)</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Chương trình Influencer</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Hỗ trợ kĩ thuật - Bảo hành</a>
                        </li>
                        <li className='text-white list-disc my-3 ml-4'>
                            <a href='' className='font-bold hover:text-[#ffffffbf]'>Về Epione</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center py-5 px-5 border-t-[1px] border-[#ffffff34]'>
                <span className='text-white text-center'>Copyright © 2019-2023 Epione. All rights reserved.</span>
            </div>
        </div>
    );
};



export default Footer;