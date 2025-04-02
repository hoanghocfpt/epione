'use client'
import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const SortBy = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname();
    const currentSort = searchParams.get('sort_by') || 'popular'
    const sortOptions = [
        { value: 'popular', label: 'Bán chạy nhất' },
        { value: 'az', label: 'Thứ tự bảng chữ cái (từ A-Z)' },
        { value: 'za', label: 'Thứ tự bảng chữ cái (từ Z-A)' },
        { value: 'lowest', label: 'Giá (tăng dần)' },
        { value: 'highest', label: 'Giá (giảm dần)' },
        { value: 'date-ascending', label: 'Ngày (từ cũ đến mới)'},
        { value: 'date-descending', label: 'Ngày (từ mới đến cũ)'}, 
    ]
    const [sortSelected, setSortSelected] = useState(currentSort)
    const handleChange = (e) => {
        setSortSelected(e.target.value)
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort_by', e.target.value)
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className='flex items-center'>
            <span className='text-[#929292] text-[14px] mr-[14px]'>Sắp xếp theo:</span>
            <div className='border rounded-lg cursor-pointer flex items-center overflow-hidden relative'>
                <select onChange={handleChange} value={sortSelected} className='py-[6px] px-[12px] pr-[32px] outline-none text-[#282828] text-[14px] appearance-none'>
                    {sortOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option> 
                    ))}
                </select>
                <svg className='absolute right-2' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m18 9l-6 6l-6-6"></path></svg>
            </div>
        </div>
    );
};

export default SortBy;