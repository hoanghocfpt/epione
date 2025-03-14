'use client'
import useCartStore from '@/zustand/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import useCartDrawer from '@/zustand/useCartDrawer';
const CartDrawer = () => {
    const { isOpen, open, close } = useCartDrawer();
    const cart = useCartStore(state => state.cart);
    const { clearCart, removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity } = useCartStore();
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    return (
        <>
            <div onClick={() => close()} className={`fixed z-[51] inset-0 bg-black bg-opacity-50 transition-opacity ${
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
                    <button onClick={() => close()}>
                        <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 24 24'><path fill='none' stroke='#282828' strokeLinecap='round' strokeLinejoin='round' d='M18 6L6 18M6 6l12 12'></path></svg>
                    </button>
                </div>
                <div className='flex-grow'>
                    <table className='w-full h-full'>
                        <tbody className='overflow-y-scroll block h-full' style={{scrollbarWidth: 'thin'}}>
                            {cart?.map((item, index) => (
                                <CartItem key={index} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
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