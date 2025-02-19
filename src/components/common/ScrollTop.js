'use client'
import React from 'react';

const ScrollTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='z-50 fixed bottom-4 right-4 bg-[] w-[46px] h-[46px] p-3 rounded-full cursor-pointer' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 10l10-8l10 8M16 2v28"></path></svg>
        </div>
    );
};

export default ScrollTop;