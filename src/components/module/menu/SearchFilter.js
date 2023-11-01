import React from 'react';
import Link from 'next/link';
import SearchIcon from '@/components/icons/SearchIcon';
import FilterSlider from './FilterSlider';

const SearchFilter = () => {
    return (
        <>
        <div className='flex lg:flex-row flex-col justify-between pt-4 md:pl-12 md:gap-6 w-full px-4' >
           <FilterSlider />
            <div className='flex items-center border border-bordercolor px-2 lg:w-96 md:w-600 w-full rounded-md md:items-center hidden lg:flex'>
                <input className='w-full pb-2 pt-1 text-sm font-medium' placeholder='جستجو' />
                <SearchIcon />
            </div>
        </div>
        <div className='px-4'>
        <div className='flex items-center border border-bordercolor px-2 sm:w-500  w-full mt-4 mx-auto rounded-md justify-center  lg:hidden'>
                <input className='w-full pb-2 pt-1 text-sm font-medium' placeholder='جستجو' />
                <SearchIcon />
            </div>
        </div>
            
    </>
    );
};

export default SearchFilter;