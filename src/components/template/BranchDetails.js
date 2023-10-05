import React from 'react';
import Image from 'next/image';
//icons
import Calling from '../icons/Calling';
import Clock from '../icons/Clock';
import LocationIcon from '../icons/LocationIcon';

const BranchDetails = ({data}) => {
    const{work, title, phone, slug, address}= data;
    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold lg:text-2xl sm:text-lg text-raven text-sm pb-4'>{title}</h2>
            <div className='h-full relative '>
                <Image src={`/images/${slug}.jpg`} alt='branches' width={800} height={336} />
                <div className='flex justify-between border border-primary text-neutral text-xs w-5/6 
                h-24 items-center px-4 mx-auto absolute z-10 -bottom-10 left-20 bg-white rounded-md'>
                    <div className='flex flex-col items-center gap-2'>
                        <Calling />
                        <p>{phone}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <LocationIcon />
                        <p>{address}</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <Clock />
                        <p>{work}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchDetails;