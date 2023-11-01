import React from 'react';
import ProductRate from './ProductRate';
import RateMobileVersion from './RateMobileVersion';
import Link from 'next/link';
import Image from 'next/image';
import { sp, e2p } from '@/utils/modifyNumber';
import { shortenIngredient } from '@/helper/functions';

const FoodCard = ({data}) => {
    const{slug, title, ingredient, rating, price, discount, category}= data;
    
    return (
        <>
        <Link href={`/menu/?category=${category}/${slug}`}>
        <div className='flex border border-bordercolor rounded-md xl:w-600 hover:shadow-md hover:transition w-full '>
            <div>
                <Image src={`/images/${slug}.jpg`}  width={0} height={0} sizes="100vw"
                style={{ width: '169px', height: '158px', objectFit:'cover', borderBottomRightRadius:'5px', borderTopRightRadius:'5px' }} alt='food-pic' />
            </div>
            <div className='pt-1 lg:pb-2 pb-4 flex flex-col justify-between sm:w-3/4 w-72 sm:px-4 px-2'>
                <p className='text-raven sm:text-xl text-sm font-semibold'>{title}</p>
                <div className='flex items-center justify-between'>
                    <p className='sm:text-sm text-xs text-neutral inline-block w-full '>{shortenIngredient(ingredient)}</p>
                    <span className='flex flex-row gap-2'>
                        <p className={discount === 0 ? 'hidden': 'text-sm text-neutral font-medium line-through hidden sm:block'}>{sp(price)}</p>
                        <p className={discount === 0 ? 'hidden': 'text-sm text-tomato font-medium bg-red-100 px-1 rounded-sm'}>%{e2p(discount)}</p>
                    </span>
                </div>
                <div className='flex justify-end'>
                    {discount ? (<p className='text-neutral sm:text-lg font-semibold text-xs'>{sp((price*(100-discount))/100)} تومان</p>):
                    (<p className='text-neutral sm:text-lg font-semibold text-xs'>{sp(price)} تومان</p>)}
                </div> 
                <div className='flex sm:items-center items-end sm:justify-between sm:gap-2 flex-row sm:flex-row flex-col items-end'>
                    <div className='hidden sm:block'><ProductRate rating={rating} /></div>
                    <div className='sm:hidden block'><RateMobileVersion rating={rating} /></div>
                    <button className='bg-primary rounded-md text-white sm:w-56 w-32 pt-3 py-4 sm:pt-1 sm:pb-2 sm:text-base text-xs 
                    hover:bg-emerald-600 transition'>افزودن به سبد خرید</button>
                </div> 
            </div>
        </div>
        </Link>
        </>
    );
};

export default FoodCard;