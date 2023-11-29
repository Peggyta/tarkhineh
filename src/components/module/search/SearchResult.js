'use client'
import React from 'react';
import ProductRate from '../menu/ProductRate';
import RateMobileVersion from '../menu/RateMobileVersion';
import Link from 'next/link';
import Image from 'next/image';
import { sp, e2p } from '@/utils/modifyNumber';
import { shortenIngredient } from '@/helper/functions';

const SearchResult = ({data}) => {
   
    const{slug, title, ingredient, rating, price, discount}= data;
    
    return (
        <>
        <div className='flex flex-col border border-bordercolor rounded-md w-72 h-[320px] hover:shadow-md hover:transition '>
            <Link href={`/menu/${slug}`}>
                <div>
                    <Image src={`/images/${slug}.jpg`}  width={0} height={0} sizes="100vw"
                    style={{ width: '288px', height: '158px', objectFit:'cover', borderTopLeftRadius:'5px', borderTopRightRadius:'5px' }} alt='food-pic' />
                </div>
            </Link>
            <div className='pt-1 lg:pb-2 pb-4 flex flex-col justify-between w-full sm:px-4 px-2'>
            <Link href={`/menu/${slug}`}>
                <p className='text-raven text-center sm:text-xl text-sm font-semibold'>{title}</p>
                <div className='flex items-center justify-between'>
                    <p className='sm:text-sm text-right text-xs text-neutral inline-block w-full '>{shortenIngredient(ingredient)}</p>
                    <span className='flex flex-row gap-2'>
                        <p className={discount === 0 ? 'hidden': 'text-sm text-neutral font-medium line-through hidden sm:block'}>{sp(price)}</p>
                        <p className={discount === 0 ? 'hidden': 'text-sm text-tomato font-medium bg-red-100 px-1 rounded-sm'}>%{e2p(discount)}</p>
                    </span>
                </div>
                    <div className='flex justify-end'>
                        {discount ? (<p className='text-neutral sm:text-lg font-semibold text-xs'>{sp((price*(100-discount))/100)} تومان</p>):
                        (<p className='text-neutral sm:text-lg font-semibold text-xs'>{sp(price)} تومان</p>)}
                    </div> 
                </Link>
                <div className='flex sm:items-center items-end justify-between sm:gap-2 mt-2 flex-row sm:flex-row flex-col items-end'>
                    <Link href={`/menu/${slug}`}>  
                    <div><RateMobileVersion rating={rating} /></div>
                    </Link>
                    <button className='bg-primary rounded-md text-white w-36 pt-3 py-4 sm:pt-1 sm:pb-2 sm:text-sm text-xs 
                    hover:bg-emerald-600 transition'>افزودن به سبد خرید</button>
                </div> 
            </div>
        </div>
        </>
    );
};

export default SearchResult;