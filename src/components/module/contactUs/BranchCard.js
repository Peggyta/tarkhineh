import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//function
import { reversePhoneNum } from '@/helper/functions';

const BranchCard = (props) => {
    const {title, phone, address, work, slug} = props;
    return (
                <div className='flex md:flex-row flex-col items-center justify-start xl:gap-20 lg:gap-6 gap-4 border border-gray-300 
                cursor-pointer hover:scale-105 hover:shadow-lg hover:transition sm:w-600 h-full w-full mx-auto md:w-full rounded-md'>
                    <div className='h-full overflow-hidden rounded-r-md'>
                        <Image src={`/images/${slug}.jpg`} alt='branches' width={600} height={280} />
                    </div>
                    <div className='text-neutral flex flex-col xl:gap-2 lg:text-lg sm:text-base text-xs px-4 md:px-0 md:pl-2'>
                        <h3 className='text-center lg:pb-4 md:py-2 font-semibold lg:text-xl sm:text-lg text-raven text-sm'>{title}</h3>
                        <p>آدرس: {address}</p>
                        <p>شماره تماس: {reversePhoneNum(phone)}</p>
                        <p>ساعت کاری: {work}</p>
                        <div className='flex gap-6 justify-center xl:pb-0 md:pt-1 lg:pt-3 lg:pb-4 py-4 w-full mt-2'>
                            <Link className='border sm:px-10 px-6 border-primary text-primary md:px-3 pt-0.5 pb-2 rounded-md hover:bg-green-200' href='/'>صفحه شعبه</Link>
                            <Link className='bg-primary sm:px-10 px-6 text-white md:px-3 pt-0.5 pb-2 rounded-md hover:bg-green-200' href='/'>دیدن در نقشه</Link>
                        </div>
                    </div>
                </div> 
    );
};

export default BranchCard;