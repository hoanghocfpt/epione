'use client'
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
const FormSearch = ({isOpen}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [queryDebounce] = useDebounce(query, 500);
    console.log(queryDebounce);
    useEffect(()=> {
        if (queryDebounce) {
            fetch(`/api/search/suggest?q=${queryDebounce}&section_id=predictive-search`)
            .then(res => res.text())
            .then(data => {
                setResults(data);
                console.log(data);
            })
        }
    }, [queryDebounce]);
    
    const resetQuery = () => {
        setQuery('');
    }
    return (
        <form className='w-full max-w-[742px] flex justify-center items-center relative'>
            <div className='flex relative items-center max-w-[742px] w-full border focus-within:ring-2 ring-[#282828] overflow-hidden rounded-lg'>
                <input onChange={(e)=>setQuery(e.target.value)} value={query} placeholder='' className='w-full peer h-[45px] py-[15px] px-[15px] leading-none pt-[24px] focus:pt-[24px] peer-placeholder-shown:pt-[15px] outline-none pr-[98px]' type="text" />
                <label className='transform transition-all duration-300 absolute left-[15px] text-[10px] peer-focus:text-[10px] -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:text-[16px] peer-placeholder-shown:translate-y-0 pointer-events-none'>Tìm kiếm</label>
                <div className='absolute right-[14px] flex gap-2 items-center'>
                    <div onClick={resetQuery} className={`${query.length > 0 && isOpen ? `block` : `hidden`} cursor-pointer border-r pr-[14px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className='hover:scale-105' viewBox="0 0 512 512"><path fill="none" stroke="#d2d2d2" strokeMiterlimit={10} strokeWidth={20} d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={20} d="M320 320L192 192m0 128l128-128"></path></svg>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} className='hover:scale-105' viewBox="0 0 50 50"><path fill="currentColor" d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13m0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11"></path><path fill="currentColor" d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z"></path></svg>
                    </div>
                </div>
            </div>
            <div className={`${query.length > 0 && isOpen ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`} transition-all bg-white absolute top-[100%] mt-[13px] left-0 w-full max-h-[600px] overflow-y-auto overflow-x-hidden`}>
                    <div className='' dangerouslySetInnerHTML={{__html: results}}></div>
            </div>
        </form>
    );
};

export default FormSearch;