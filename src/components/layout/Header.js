'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

//logo
import logo from '../../../public/images/logo.png';
//icons
import HamburgerIcon from '../icons/HamburgerIcon';
import SearchIcon from '../icons/SearchIcon';
import ProfileIcon from '../icons/ProfileIcon';
import CartIcon from '../icons/CartIcon';
import LoginIcon from '../icons/LoginIcon';

const Header = () => {
    const {data} = useSession();
    const navLinks = [
        {text: 'صفحه اصلی', href:'/'},
        {text: 'منو', href:'/menu'},
        {text: 'اعطای نمایندگی', href:'/branches'},
        {text:'درباره ما', href:'/about-us'},
        {text:'تماس با ما', href:'/contact-us'},
    ];
    
    return (
       <header className='flex items-center text-base lg:text-xl justify-between sm:px-10 px-4 h-28'>
            <div className='block md:hidden'>
                <HamburgerIcon />
            </div>
            <div className=' sm:w-max w-28'>
                <Link href='/'>
                    <Image src={logo} alt='logo' width="auto" height="auto" priority={true} />
                </Link> 
            </div>
            <div className='hidden md:flex lg:gap-6 gap-3 text-neutral'>
                {navLinks.map((item, index)=>{
                    return  <Link 
                                key={index}
                                href={item.href}
                            >
                                {item.text}
                            </Link>
                })}
            </div>
            <div className='flex gap-3'>
                <span className='bg-secondary lg:p-2 p-1 hidden md:block'>
                    <SearchIcon />
                </span>
                <span className='bg-secondary lg:p-2 p-1'>
                    <CartIcon />
                </span>
                {data ? (
                    <div className='bg-secondary lg:p-2  p-1'>
                        <Link href='/dashboard'>
                            <ProfileIcon />
                        </Link>
                    </div>): (
                    <div className='bg-secondary lg:p-2  p-1'>
                        <Link href='/signin'>
                            <LoginIcon />
                        </Link>
                    </div>)}
            </div> 
       </header>
    );
};

export default Header;