import React from 'react';
import Image from 'next/image';

const BranchCard = (props) => {
    const {title, phone, address, work, slug} = props;
    return (
        <div className='flex items-center justify-start gap-20 border border-neutral'>
            <div>
                <Image src={`/images/${slug}.jpg`} alt='branches' width={600} height={280} />
            </div>
            <div className='text-neutral flex flex-col gap-2 text-lg'>
                <h3 className='text-center font-semibold text-xl text-raven'>{title}</h3>
                <p>آدرس: {address}</p>
                <p>شماره تماس: {phone}</p>
                <p>ساعت کاری: {work}</p>
            </div>
        </div>
    );
};

export default BranchCard;