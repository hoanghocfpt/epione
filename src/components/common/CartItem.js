import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CartItem = ({item, removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity}) => {
    const [quantity, setQuantity] = useState(item?.quantity);
    useEffect(() => {
        setQuantity(item?.quantity);
    }, [item?.quantity]);
    return (
        <tr className='py-[16px] grid gap-[16px] grid-rows-[auto_auto] grid-cols-[80px_1fr_1fr] border-b border-[#e5e5e5] last-of-type:border-none'>
            <td className='row-start-1 row-end-3'>
                <Link href={'/products/'+item?.handle + '?variant='+item?.variant.id} className='flex gap-4'>
                    <Image width={150} height={113} className='' src={item?.variant.featured_image.src} alt='product' />
                </Link>
            </td>
            <td className='col-start-2 col-end-4'>
                <div className='flex items-center justify-between'>
                    <a href='#' className='flex gap-4'>
                        <span className='text-sm text-[#282828] font-bold'>{item?.title}</span>
                    </a> 
                    <div onClick={()=>removeFromCart(item?.variant.id)} className='w-7 h-7 cursor-pointer flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 0 1-1.415.5A2.25 2.25 0 0 0 12 2.75M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99z"></path><path fill="currentColor" d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15z"></path></svg>
                    </div>
                </div>
                <span className='text-xs text-[#929292]'>{item?.variant?.title}</span>
            </td>
            <td>
                <div className='flex w-fit items-center border p-[5px] rounded-lg'>
                    <button onClick={()=>decreaseQuantity(item?.variant.id)} className='w-[36px] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M19.5 12h-15"></path></svg>
                    </button>
                    <input onBlur={()=>updateQuantity(item?.variant.id, quantity)} className='outline-none border-none w-[46px] text-center' onChange={(e) => setQuantity(e.target.value)} value={quantity} type="text" />
                    <button onClick={()=>increaseQuantity(item?.variant.id)} className='w-[36px] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M12 3.5v17m8.5-8.5h-17"></path></svg>
                    </button>
                </div>
            </td>
            <td className='text-right'>
                <span className='text-[#10069f] text-lg font-bold'>{(item?.quantity * parseInt(item?.variant.price.toString().slice(0, -2))).toLocaleString('vi-VN') + ' VND'}</span>
            </td>
        </tr>
    );
};

export default CartItem;