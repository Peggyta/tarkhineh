import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//logo
import logo from '../../../public/images/logo.png';
//icons
import HamburgerIcon from '../icons/HamburgerIcon';
import SearchIcon from '../icons/SearchIcon';
import ProfileIcon from '../icons/ProfileIcon';
import CartIcon from '../icons/CartIcon';

const Header = () => {
    return (
       <header className='flex items-center text-base lg:text-xl justify-between sm:px-10 px-4 h-28'>
            <div className='block md:hidden'>
                <HamburgerIcon />
            </div>
            <div className=' sm:w-max w-28'>
                <Image src={logo} alt='logo' width="auto" height="auto" priority={true} />
            </div>
            <div className='hidden md:flex lg:gap-6 gap-3 text-neutral'>
                <Link href='/'>صفحه اصلی</Link>
                <Link href='/'>منو</Link>
                <Link href='/branches'>اعطای نمایندگی</Link>
                <Link href='/about-us'>درباره ما</Link>
                <Link href='/contact-us'>تماس با ما</Link>
            </div>
            
            <div className='flex gap-3'>
                <span className='bg-secondary lg:p-2 p-1 hidden md:block'>
                    <SearchIcon />
                </span>
                <span className='bg-secondary lg:p-2 p-1'>
                    <CartIcon />
                </span>
                <span className='bg-secondary lg:p-2 p-1'>
                    <ProfileIcon />
                </span>
            </div> 
       </header>
    );
};

export default Header;