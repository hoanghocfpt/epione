'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
const Options = ({options, variants}) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const variantq = searchParams.get('variant')
     // options
    const [option, setOption] = useState({
        option1: variants[0]?.option1,
        option2: variants[0]?.option2,
        option3: variants[0]?.option3
    });

    const [variant, setVariant] = useState(null);
    
    
    
    const handleOptionChange = (position, value) => {
        setOption({
            ...option,
            [`option${position}`]: value
        });
    };
    
    useEffect(() => {
        setVariant(variants.find(v => {
            return v.option1 === option.option1 && v.option2 === option.option2 && v.option3 === option.option3;
        }));
        console.log(variant);
        
    }, [option]);

    useEffect(() => {
        if(variant){
            const params = new URLSearchParams(searchParams.toString());
            params.set('variant', variant?.id);
            router.replace(`?${params.toString()}`);
        }
    }, [variant]);


    console.log(option, variant);
    return (
        <>
            <div>{variant?.title}</div>
            {options.map((op, index) => (
                <div key={index}>
                    <span className='font-semibold block mb-3'>{op?.name}</span>
                    <div className='flex items-center gap-2'>
                        {op?.values.map((value, index) => (
                            <div key={index} className='flex relative overflow-hidden items-center gap-2 select-none'>
                                <input checked={
                                option[`option${op?.position}`] === value
                            } onChange={(e) => handleOptionChange(op?.position, value)} id={`${value}`} className='peer hidden' type='radio' name={`${op?.name}`} />
                                <label htmlFor={`${value}`} className='peer-checked:after:block after:hidden after:content-["\2714"] after:leading-none overflow-hidden relative after:text-white after:rounded-bl-[50px] after:w-[15px] after:h-[14px] after:absolute after:right-0 after:top-0 after:text-[8px] after:pt-[3px] after:pb-[5px] after:pl-[5px] after:bg-[#10069f] cursor-pointer leading-5 flex items-center gap-2 text tracking-wider py-[8px] px-[12px] rounded-lg peer-checked:text-[#10069f] border peer-checked:border-[#10069f]' >
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