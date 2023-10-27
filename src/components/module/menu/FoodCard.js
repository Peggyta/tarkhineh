import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FoodCard = ({data}) => {
    const{slug, title, ingredient, rating, price, discount}= data;
    
    return (
        <div className='flex'>
            <div>
                <Image src={`/images/${slug}.jpg`}  width={0} height={0} sizes="100vw"
                style={{ width: '169px', height: '158px', objectFit:'cover' }} alt='food-pic' />
            </div>
            <div>
                <p>{title}</p>
            </div>
            
        </div>
    );
};

export default FoodCard;