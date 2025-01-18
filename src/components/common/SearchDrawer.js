import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import FormSearch from './FormSearch';

const SearchDrawer = ({isOpen, onClose}) => {
    // useEffect(() => {
    //         if (isOpen) {
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             document.body.style.overflow = 'auto';
    //         }
    //     }, [isOpen]);
    return (
        <>
            <div onClick={() => onClose(true)} className={`fixed z-[51] inset-0 bg-black bg-opacity-50 transition-opacity ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
            </div>
            <div className={`z-[51] fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            } w-full flex py-7 px-6 flex-col max-h-[72px]`}>
                <div className='flex justify-center gap-4 items-center h-full px-[6%]'>
                    <FormSearch isOpen={isOpen} />
                    <button className='hover:scale-105' onClick={() => onClose(false)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28} viewBox='0 0 24 24'><path fill='none' stroke='#282828' strokeLinecap='round' strokeLinejoin='round' d='M18 6L6 18M6 6l12 12'></path></svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchDrawer;