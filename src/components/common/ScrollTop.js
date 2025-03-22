'use client'
import { useEffect, useState } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    // window.onscroll = () => {
    //     if (window.pageYOffset > 300) {
    //         setIsVisible(true);
    //     } else {
    //         setIsVisible(false);
    //     }
    // };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className={`${!isVisible && `translate-y-[150%]`} z-50 fixed bottom-[20px] transition-transform duration-300 right-[32px] bg-[#10069f] w-[46px] h-[46px] flex items-center justify-center rounded-full cursor-pointer`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 32 32"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 10l10-8l10 8M16 2v28"></path></svg>
        </div>
    );
};

export default ScrollTop;