import React from 'react';
//icons
import SellIcon from '@/components/icons/SellIcon';
import EquipmentIcon from '@/components/icons/EquipmentIcon';
import CookIcon from '@/components/icons/CookIcon';
import BuildingIcon from '@/components/icons/BuildingIcon';

const Features = () => {
    return (
        <div className='my-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-10 px-4 lg:gap-2 gap-6'>
            <div className='flex flex-col gap-2 items-center text-raven text-lg'>
                <span className='border border-primary rounded-full pt-5 pb-6 px-5 w-fit'>
                    <BuildingIcon />
                </span>
                <p className='inline-block w-40 text-center'>بیش از 20 شعبه فعال در سراسر کشور</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-raven text-lg'>
                <span className='border border-primary rounded-full pt-5 pb-6 px-5 w-fit'>
                    <EquipmentIcon />
                </span>
                <p className='inline-block w-40 text-center'>تسهیلات راه‌اندازی رستوران و تجهیز آن</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-raven text-lg'>
                <span className='border border-primary rounded-full pt-5 pb-6 px-5 w-fit'>
                    <SellIcon />
                </span>
                <p className='inline-block w-40 text-center'>طرح‌های تشویقی ارتقای فروش</p>
            </div>
            <div className='flex flex-col gap-2 items-center text-raven text-lg'>
                <span className='border border-primary rounded-full pt-5 pb-6 px-5 w-fit'>
                    <CookIcon />
                </span>
                <p className='inline-block w-40 text-center'>اعطای دستورالعمل پخت غذاها</p>
            </div>
        </div>
    );
};

export default Features;