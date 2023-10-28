import React from 'react';
import ProductRate from './ProductRate';
import Link from 'next/link';
import Image from 'next/image';
import { sp, e2p } from '@/utils/modifyNumber';

const FoodCard = ({data}) => {
    const{slug, title, ingredient, rating, price, discount}= data;
    
    return (
        <div className='flex border border-bordercolor rounded-md w-600'>
            <div>
                <Image src={`/images/${slug}.jpg`}  width={0} height={0} sizes="100vw"
                style={{ width: '169px', height: '158px', objectFit:'cover', borderBottomRightRadius:'5px', borderTopRightRadius:'5px' }} alt='food-pic' />
            </div>
            <div className='pt-1 pb-2 flex flex-col justify-between w-430 px-4'>
                <p className='text-raven text-xl font-semibold'>{title}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-neutral inline-block w-80'>{ingredient}</p>
                    <span>
                        <p className={discount === 0 ? 'hidden': 'text-sm text-tomato font-medium'}>%{e2p(discount)}</p>
                    </span>
                </div>
                <div className='flex justify-end'>
                    <p className='text-neutral text-lg font-semibold'>{sp(price)} تومان</p>
                </div> 
                <div className='flex items-center justify-between'>
                    <ProductRate rating={rating} />
                    <button className='bg-primary rounded-md text-white w-56 pt-1 pb-2 hover:bg-emerald-600 transition'>افزودن به سبد خرید</button>
                </div> 
            </div>
            
        </div>
    );
};

export default FoodCard;