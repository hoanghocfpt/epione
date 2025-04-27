'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
const Options = ({options, variants, option, setOption, variant, setVariant, setSelectedProductImage}) => {
    const searchParams = useSearchParams()
   
    const router = useRouter()
    

    const [changeOp, setChangeOp] = useState(false);

    
    const isOptionAvailable = (position, value) => {
        const newOption = { ...option, [`option${position}`]: value };
        return variants.some(v => 
            v.option1 === newOption.option1 &&
            v.option2 === newOption.option2 &&
            v.option3 === newOption.option3 &&
            v.available
        );
    };
    
    const handleOptionChange = (position, value) => {
        setOption({
            ...option,
            [`option${position}`]: value
        });
        setChangeOp(true);
    };
    

    useEffect(() => {
        setVariant(variants.find(v => {
            return v.option1 === option.option1 && v.option2 === option.option2 && v.option3 === option.option3;
        }));
        
    }, [option, variants, setVariant]);

    
    useEffect(() => {

        const params = new URLSearchParams(searchParams.toString());
    
        if(changeOp && variant){
            params.set('variant', variant._id);
            
            window.history.replaceState({}, '', `?${params.toString()}`);
            setSelectedProductImage(variant.featured_image?.position)
        }
    }, [variant, changeOp, searchParams, setSelectedProductImage]);


    return (
        <>
            {/* <div>{variant?.title} {variant?.price} {variant?.featured_image.position} {variant?.available ? 'Còn hàng' : 'Không còn hàng'}</div> */}
            {options.map((op, index) => (
                <div key={index}>
                    <span className='font-semibold block mb-3'>{op?.name}</span>
                    <div className='flex items-center gap-2'>
                        {op?.values.map((value, index) => (
                            <div key={index} className='flex relative overflow-hidden items-center gap-2 select-none'>
                                <input checked={
                                option[`option${op?.position}`] === value
                            } onChange={(e) => handleOptionChange(op?.position, value, op?.featured_image?.position)} id={`${op?.position}${value}`} className='peer hidden' type='radio' name={`${op?.name}`} />
                                <label htmlFor={`${op?.position}${value}`} className={`peer-checked:after:block after:hidden after:content-['✔'] after:leading-none overflow-hidden relative after:text-white after:rounded-bl-[50px] after:w-[15px] after:h-[14px] after:absolute after:right-0 after:top-0 after:text-[8px] after:pt-[3px] after:pb-[5px] after:pl-[5px] after:bg-[#10069f] cursor-pointer leading-5 flex items-center gap-2 text tracking-wider py-[8px] px-[12px] rounded-lg peer-checked:text-[#10069f] border peer-checked:border-[#10069f] ${!isOptionAvailable(op?.position, value) && op?.position !== 1 ? 'line-through' : ''}`} >
                                    {op?.name.includes('Màu sắc') && (<span className='border w-5 h-5 rounded-full bg-black'></span>)}
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Options;