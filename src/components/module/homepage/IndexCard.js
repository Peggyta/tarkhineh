import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IndexCard = (props) => {
    const {title, address, slug} = props;
    return (
        <div className='flex flex-col items-center sm:justify-start justify-between gap-2 pb-4 border border-bordercolor 
                cursor-pointer hover:shadow-lg hover:transition mx-auto md:w-full rounded-md'>
                    <Link href={`/contact-us/${slug}`}>
                    <div className='overflow-hidden  rounded-tr roundrd-tl md:w-full md:h-fit '>
                        <Image src={`/images/${slug}.jpg`} alt='branches' width={600} height={280} />
                    </div>
                    <div className='text-neutral flex flex-col xl:gap-2 xl:text-lg sm:text-sm text-xs px-4 md:px-0 md:pl-2 pt-2'>
                        <h3 className='text-center font-semibold lg:text-xl sm:text-lg text-raven text-sm'>{title}</h3>
                        <p className='sm:text-sm px-3 text-center text-xs'>{address}</p>
                    </div>
                    </Link>
                </div> 
       
    );
};

export default IndexCard;