import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//function
import { reversePhoneNum } from '@/helper/functions';

const BranchCard = (props) => {
    const {title, phone, address, work, slug} = props;
    return (
        <>
        <Link href={`/contact-us/${slug}`}>
                <div className='flex md:flex-row flex-col items-center justify-start lg:gap-20 gap-6 border border-gray-300 
                cursor-pointer hover:scale-105 hover:shadow-lg hover:transition sm:w-600 h-full w-full mx-auto md:w-full rounded-md'>
                    <div className='h-full overflow-hidden rounded-r-md md:w-1/2 w-full'>
                        <Image src={`/images/${slug}.jpg`} alt='branches' width={600} height={280} />
                    </div>
                    <div className='text-neutral flex flex-col xl:gap-2 xl:text-lg sm:text-sm text-xs px-4 md:px-0 md:pl-2 pb-10 md:pb-0'>
                        <h3 className='text-center md:pb-4 font-semibold lg:text-xl sm:text-lg text-raven text-sm'>{title}</h3>
                        <p>آدرس: {address}</p>
                        <p>شماره تماس: {reversePhoneNum(phone)}</p>
                        <p>ساعت کاری: {work}</p>   
                    </div>
                </div> 
            </Link>
            </>
    );
};

export default BranchCard;