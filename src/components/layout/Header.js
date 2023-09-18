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
       <header className='flex items-center text-base lg:text-xl justify-between h-28'>
            <div className='block md:hidden'>
                <HamburgerIcon />
            </div>
            <div className=' sm:w-max w-20'>
                <Image src={logo} alt='logo' width={155} height={51}/>
            </div>
            <div className='hidden md:flex lg:gap-6 gap-4 text-neutral'>
                <Link href='/'>صفحه اصلی</Link>
                <Link href='/'>منو</Link>
                <Link href='/'>اعطای نمایندگی</Link>
                <Link href='/'>درباره ما</Link>
                <Link href='/'>تماس با ما</Link>
            </div>
            <div className='flex items-center gap-4 text-primary bg-white'>
                <Link className='bg-primary text-white md:px-3 px-2 pb-2 transition rounded-lg hover:bg-emerald-600' href='/'>
                    عضویت
                </Link>
                <Link className='pb-2 md:px-3 px-2' href='/'>ورود</Link>
            </div>
            {/* <div className='flex gap-3'>
                <span className='bg-secondary p-2'>
                    <SearchIcon />
                </span>
                <span className='bg-secondary p-2'>
                    <CartIcon />
                </span>
                <span className='bg-secondary p-2'>
                    <ProfileIcon />
                </span>
            </div> */}
       </header>
    );
};

export default Header;