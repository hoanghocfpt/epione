'use client'
import React, { useState } from 'react';
import ProductImages from './ProductImages';
import Options from './Options';
import useCartStore from '@/zustand/useCartStore'
const ParentOption = ({product}) => {
    const { addToCart } = useCartStore()
    const [option, setOption] = useState({
        option1: product?.variants[0]?.option1,
        option2: product?.variants[0]?.option2,
        option3: product?.variants[0]?.option3
    });
    const [variant, setVariant] = useState();

    const [buyWholesale, setBuyWholesale] = useState(false);

    const handleAddToCart = () => {
        const item = {
            title: product?.title,
            variant: variant,
            quantity: 1
        }
        addToCart(item)
        console.log('add to cart', item);
    }
    return (
        <div className='max-w-screen-2xl mx-auto px-8 grid grid-cols-2 gap-[24px] py-8'>
            <ProductImages data={product?.images} />
            <div className='pl-7 py-3'>
                <h1 className='text-[#10069f] text-[34px] font-semibold mb-3'>{product?.title}</h1>
                <div className='flex items-center gap-1 mb-2'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"></path></svg>
                    </div>
                    <span className='text-[#282828]'>8 đánh giá</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-[#10069f] font-semibold mb-2 text-[26px]'>{variant ? parseInt(variant?.price.toString().slice(0, -2)).toLocaleString('vi-VN') + ' VND' : parseInt(product.price.toString().slice(0, -2)).toLocaleString('vi-VN') + ' VND'}</span>
                    <span className='text-[#929292] font-medium text-[18px] mb-1 line-through'></span>
                </div>
                <div className='border flex items-center gap-2 rounded-lg'>
                    <div onClick={() => setBuyWholesale(false)} className={`w-full h-[44px] border ${buyWholesale ? `border-transparent` : `border-[#10069f]`} rounded-lg flex justify-center items-center cursor-pointer`}>
                        <span className={`font-bold ${!buyWholesale && `text-[#10069f]`}`}>Mua lẻ</span>
                    </div>
                    <div onClick={() => setBuyWholesale(true)} className={`w-full h-[44px] border ${buyWholesale ? `border-[#10069f]` : `border-transparent`} rounded-lg flex justify-center items-center cursor-pointer  flex-col`}>
                        <span className={`font-bold ${buyWholesale && `text-[#10069f]`}`}>Mua sỉ</span>
                        <span className='font-bold text-xs text-[#f83a3a]'>Tiết kiệm 8%</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <Options options={product?.options} variants={product?.variants} option={option} setOption={setOption} variant={variant} setVariant={setVariant} />
                    {buyWholesale && (
                        <div>
                            <table className='w-full border-separate'>
                                <tbody>
                                    <tr>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>Số lượng</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm font-bold text-[#10069f]'>3</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>5</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>10+</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>Đơn giá</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm font-bold text-[#10069f]'>3.500.000 VND</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>3.400.000 VND</td>
                                        <td className='bg-[#f0f0f0] p-[8px] text-sm'>3.300.000 VND</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className='flex items-center gap-3'>
                        <div className='flex w-fit items-center border p-2 rounded-lg'>
                            <button className='w-[45px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M19.5 12h-15"></path></svg>
                            </button>
                            <input className='outline-none border-none w-[40px] text-center' defaultValue={1} type="text" />
                            <button className='w-[45px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" d="M12 3.5v17m8.5-8.5h-17"></path></svg>
                            </button>
                        </div>
                        {buyWholesale && (
                            <div className='flex flex-col px-2'>
                                <span className='text-[#10069f] font-semibold'>17.430.900₫</span>
                                <span className='text-[#929292] font-medium text-xs mb-1 line-through'>17.970.000₫</span>
                            </div>
                        )}
                        <button onClick={handleAddToCart} className={`w-full outline h-[42px] hover:outline-[#10069f] outline-transparent bg-[#10069f] text-white rounded-lg flex justify-center items-center ${!variant?.available ? `cursor-not-allowed opacity-50` : `cursor-pointer`}`}>
                            <span className='font-medium text-lg'>{variant?.available ? `Thêm vào giỏ hàng` : `Đã bán hết`}</span>
                            {/* <svg className='animate-spin' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9"></path></svg> */}
                        </button>
                    </div>
                    <div className='border rounded-xl py-5 px-3 flex flex-col gap-3'>
                        <div>
                            <div className='flex items-center gap-2 mb-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path><path d="M14.5 17.5h-5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5m.5-9h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M2 13v2c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4"></path></g></svg>
                                <span className='font-semibold'>Hỗ trợ lắp đặt</span>
                            </div>
                            <p className='text-sm'>Miễn phí lắp đặt cho các đơn hàng nội thành Hà Nội và HCM (không bao gồm Củ Chi và Cần Giờ).</p>
                            <p className='text-sm'>Vui lòng cọc trước 500.000đ với đơn hàng ngoài HCM.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 mb-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></path></svg>
                                <span className='font-semibold'>Giao hàng</span>
                            </div>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td className='p-[4px] text-sm'>Khu vực Nội thành TP.HCM</td>
                                        <td className='p-[4px] text-sm'>Trong vòng 24h</td>
                                        <td className='p-[4px] text-sm font-bold'>Miễn phí</td>
                                    </tr>
                                    <tr>
                                        <td className='p-[4px] text-sm'>Khu vực Ngoại thành TP.HCM</td>
                                        <td className='p-[4px] text-sm'>1-3 Ngày</td>
                                        <td className='p-[4px] text-sm font-bold'>Miễn phí</td>
                                    </tr>
                                    <tr>
                                        <td className='p-[4px] text-sm'>Khu vực Nội thành & Ngoại thành Hà Nội</td>
                                        <td className='p-[4px] text-sm'>3-4 ngày</td>
                                        <td className='p-[4px] text-sm font-bold'>Miễn phí</td>
                                    </tr>
                                    <tr>
                                        <td className='p-[4px] text-sm'>Các tỉnh thành khác</td>
                                        <td className='p-[4px] text-sm'>5-7 ngày</td>
                                        <td className='p-[4px] text-sm font-bold'>Miễn phí</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='border rounded-xl py-5 px-3 flex flex-col gap-3'>
                        <div>
                            <div className='flex items-center gap-2 mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill="currentColor" d="M31.25 7.4a44 44 0 0 1-6.62-2.35a45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12l.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59ZM30 15.93c0 11-10 15.61-12 16.43c-2-.82-12-5.44-12-16.43V9.14a47.5 47.5 0 0 0 6.18-2.25a48 48 0 0 0 5.82-3a48 48 0 0 0 5.82 3A47.5 47.5 0 0 0 30 9.14Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M10.88 16.87a1 1 0 0 0-1.41 1.41l6 6L26.4 13.77a1 1 0 0 0-1.4-1.44l-9.47 9.19Z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                                <span className='font-semibold'>Bảo hành 3 năm cho khung và các bộ phận máy</span>
                            </div>
                            <p className='text-sm'>Tham khảo chính sách bảo hành chi tiết tại đây.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ParentOption;