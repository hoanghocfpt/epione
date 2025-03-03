import useCartStore from '@/zustand/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
const CartDrawer = ({isOpen, onClose, children}) => {
    const cart = useCartStore(state => state.cart);
    console.log(cart);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    return (
        <>
            <div onClick={() => onClose(true)} className={`fixed z-[51] inset-0 bg-black bg-opacity-50 transition-opacity ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
            </div>
            <div className={`z-[51] fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } max-w-[515px] w-[calc(100%-50px)] flex py-7 px-6 flex-col`}>
                <div className='flex justify-between'>
                    <div className='flex flex-col items-center'>
                        <span className='text-[#282828] text-[24px] font-bold'>Giỏ hàng</span>
                    </div>
                    <button onClick={() => onClose(false)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 24 24'><path fill='none' stroke='#282828' strokeLinecap='round' strokeLinejoin='round' d='M18 6L6 18M6 6l12 12'></path></svg>
                    </button>
                </div>
                <div className='flex-grow'>
                    <table className='w-full'>
                        <tbody className='overflow-y-scroll'>
                            {cart?.map((item, index) => (
                                <tr key={index} className='py-[16px] grid gap-[16px] grid-rows-[auto_auto] grid-cols-[80px_1fr_1fr] border-b border-[#e5e5e5] last-of-type:border-none'>
                                    <td className='row-start-1 row-end-3'>
                                        <Link href='#' className='flex gap-4'>
                                            <Image width={150} height={113} className='' src={item?.variant.featured_image.src} alt='product' />
                                        </Link>
                                    </td>
                                    <td className='col-start-2 col-end-4'>
                                        <div className='flex items-center justify-between'>
                                            <a href='#' className='flex gap-4'>
                                                <span className='text-sm text-[#282828] font-bold'>{item?.title}</span>
                                            </a>
                                            <div className='w-7 h-7 cursor-pointer flex items-center justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 0 1-1.415.5A2.25 2.25 0 0 0 12 2.75M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99z"></path><path fill="currentColor" d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15z"></path></svg>
                                            </div>
                                        </div>
                                        <span className='text-xs text-[#929292]'>{item?.variant?.title}</span>
                                    </td>
                                    <td>
                                        <div className='flex w-fit items-center border p-[5px] rounded-lg'>
                                            <button className='w-[36px] flex justify-center items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M19.5 12h-15"></path></svg>
                                            </button>
                                            <input className='outline-none border-none w-[46px] text-center' defaultValue={1} type="text" />
                                            <button className='w-[36px] flex justify-center items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M12 3.5v17m8.5-8.5h-17"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className='text-right'>
                                        <span className='text-[#10069f] text-lg font-bold'>{parseInt(item?.variant.price.toString().slice(0, -2)).toLocaleString('vi-VN') + ' VND'}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[#282828] text-lg font-bold'>Tạm tính</span>
                    <span className='text-[#10069f] text-lg font-bold'>8.070.000₫</span>
                </div>
                <div>
                    <div className='flex justify-between items-center pb-4'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#929292" d="M5.333 3.833a.504.504 0 0 1-.5-.5v-2c0-.273.227-.5.5-.5.274 0 .5.227.5.5v2c0 .274-.226.5-.5.5m5.334 0a.504.504 0 0 1-.5-.5v-2c0-.273.226-.5.5-.5.273 0 .5.227.5.5v2c0 .274-.227.5-.5.5m-.667 4H4.667a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5H10c.273 0 .5.227.5.5 0 .274-.227.5-.5.5M8 10.5H4.667a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5H8c.273 0 .5.227.5.5s-.227.5-.5.5"/><path fill="#929292" d="M10 15.167H6c-3.747 0-4.5-1.767-4.5-4.62V6.433c0-3.16 1.067-4.446 3.807-4.6h5.36c2.766.154 3.833 1.44 3.833 4.6v4.234c0 .273-.227.5-.5.5a.504.504 0 0 1-.5-.5V6.433c0-2.906-.967-3.493-2.86-3.6H5.333c-1.866.107-2.833.694-2.833 3.6v4.114c0 2.553.487 3.62 3.5 3.62h4c.273 0 .5.226.5.5 0 .273-.227.5-.5.5"/><path fill="#929292" d="M10 15.167a.5.5 0 0 1-.5-.5v-2c0-1.614.887-2.5 2.5-2.5h2c.2 0 .387.12.46.306.08.187.033.4-.107.547l-4 4a.5.5 0 0 1-.353.147m2-4c-1.053 0-1.5.446-1.5 1.5v.793l2.293-2.293z"/></svg>
                            <span className='text-[#929292] text-xs underline'>Thêm ghi chú đơn hàng</span>
                        </div>
                        <span className='text-[#929292] text-xs'>Đã bao gồm VAT nếu có</span>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <button className='w-full bg-[#10069f] text-white py-[10px] px-[20px] flex justify-between items-center rounded-xl'>
                            <div className='w-[24px] h-[24px]'></div>
                            Thanh toán
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;