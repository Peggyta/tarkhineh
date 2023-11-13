'use client';
import React, { useState } from 'react';
import Link from 'next/link';
//icons
import HamburgerIcon from '../icons/HamburgerIcon';

const HamburgerMenu = () => {
    const[showMenu, setShowMenu] = useState(false);
    return (
    <>
        <div className='w-full flex items-end justify-between px-4 pt-4 relative'>
            <div onClick={()=> setShowMenu(!showMenu) } className='flex gap-3'>
                <button onClick={()=> setShowMenu(!showMenu)}>
                    <HamburgerIcon/>     
                </button>
            </div>
        </div>
        <div onClick={() => setShowMenu(!showMenu)} 
        className={showMenu ?
         'top-0 -right-4 h-full z-20 transition ease-in transition-all p-8 font-bold absolute bg-gray-200 w-80' : 
         'translate-x-0 absolute -right-48'}>
            <div className='absolute right-10'>
                {showMenu ? 'x' : <HamburgerIcon/>}  
            </div>   
            <div className='flex flex-col items-center gap-3 mt-6'>
                <Link href='/'>صفحه اصلی</Link>
                <Link href='/menu'>منو</Link>
                <Link href='/branches'>شعبه</Link>
                <Link href='/about-us'>درباره ما</Link>
                <Link href='/contact-us'>تماس با ما</Link> 
            </div>            
        </div>
    </>
    );
};

export default HamburgerMenu;