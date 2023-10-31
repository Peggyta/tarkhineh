import React from 'react';
import Link from 'next/link';
import SearchIcon from '@/components/icons/SearchIcon';

const SearchFilter = () => {
    return (
        <div className='flex xl:flex-row flex-col lg:justify-between lg:px-12 px-4 pt-4 gap-4'>
            <div className='flex gap-4 text-neutral overflow-x-auto'>
                <Link className=' bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>غذاهای ایرانی</Link>
                <Link className='bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>غذاهای غیرایرانی</Link>
                <Link className='bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>پیتزاها</Link>
                <Link className='bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>ساندویچ‌ها</Link>
                <Link className='bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>پرفروش‌ترین</Link>
                <Link className='bg-ash rounded-full px-2 pt-1 hover:bg-emerald-100' href='/'>اقتصادی‌ترین</Link>
            </div>
            <div className='flex items-center border border-bordercolor px-2 lg:w-470 md:w-600 w-full rounded-md md:items-center'>
                <input className='w-full pb-2 pt-1 text-sm font-medium' placeholder='جستجو' />
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchFilter;