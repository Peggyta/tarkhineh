import React from 'react';
import Image from 'next/image';
//icons
import Calling from '../icons/Calling';
import Clock from '../icons/Clock';
import LocationIcon from '../icons/LocationIcon';

const BranchDetails = ({data}) => {
    const{work, title, phone, slug, address}= data;
    return (
        <div className='flex flex-col items-center sm:px-10 px-4'>
            <h2 className='font-bold lg:text-2xl text-lg text-raven pb-4'>{title}</h2>
            <div className='h-full relative '>
                <Image src={`/images/${slug}.jpg`} alt='branches' width={800} height={336} />
                <div className='flex md:flex-row flex-col justify-between border border-2 border-primary text-neutral text-xs md:w-5/6 w-full 
                md:h-24 h-full md:pt-0 md:pb-0 pt-6 pb-10 items-center px-4 mx-auto md:absolute md:z-10 md:-bottom-10 md:left-20 bg-white rounded-md'>
                    <div className='flex md:flex-col items-center gap-2 pb-4 md:pb-0'>
                        <Calling />
                        <p>{phone}</p>
                    </div>
                    <div className='flex md:flex-col items-center gap-2 pb-4 md:pb-0'>
                        <LocationIcon />
                        <p>{address}</p>
                    </div>
                    <div className='flex md:flex-col items-center gap-2 pb-4 md:pb-0'>
                        <Clock />
                        <p>{work}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchDetails;