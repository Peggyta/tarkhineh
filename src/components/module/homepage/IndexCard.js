import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IndexCard = (props) => {
    const {title, address, slug} = props;
    return (
        <div className='flex flex-col items-center sm:justify-start justify-between gap-2 pb-4 border border-bordercolor 
                cursor-pointer hover:shadow-lg hover:transition h-full w-full mx-auto md:w-full rounded-md'>
                    <div className=' overflow-hidden rounded-tr roundrd-tl md:w-full md:h-fit  h-full'>
                        <Image src={`/images/${slug}.jpg`} alt='branches' width={600} height={280} />
                    </div>
                    <div className='text-neutral flex flex-col xl:gap-2 xl:text-lg sm:text-sm text-xs px-4 md:px-0 md:pl-2'>
                        <h3 className='text-center font-semibold lg:text-xl sm:text-lg text-raven text-sm'>{title}</h3>
                        <p className='sm:text-sm px-3 text-center text-xs'>{address}</p>
                    </div>
                </div> 
       
    );
};

export default IndexCard;