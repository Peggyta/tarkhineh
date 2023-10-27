import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dessert from '../../../../public/images/dessert.png';
import appetizer from '../../../../public/images/appetizer.png';
import drink from '../../../../public/images/drink.png';
import mainCourse from '../../../../public/images/mainCourse.png';

const Categories = () => {
    
    return (
        <div className='mt-10 pb-16 text-raven sm:px-10 px-4'>
        <h2 className='text-center mb-6 font-bold text-2xl'>منوی رستوران</h2>
        <div className=' mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-xl lg:gap-4 gap-12'>
            <Link href={`/menu/?category=غذای-اصلی`}>
                <div className='flex flex-col items-center relative'>
                    <Image src={mainCourse} width={287} height={321} alt='category' />
                    <div className='category-card'>
                        <p>غذای اصلی</p>
                    </div>     
                </div>
            </Link>
            <Link href={`/menu/?category=پیش-غذا`}>
                <div className='flex flex-col items-center relative'>
                    <Image src={appetizer} width={287} height={321} alt='category' />
                    <div className='category-card'>
                        <p>پیش‌غذا</p>
                    </div>
                </div>
            </Link>
            <Link href={`/menu/?category=دسر`}>
                <div className='flex flex-col items-center relative'>
                    <Image src={dessert} width={287} height={321} alt='category' />
                    <div className='category-card'>
                        <p>دسر</p>
                    </div> 
                </div>
            </Link>
            <Link href={`/menu/?category=نوشیدنی`}>
                <div className='flex flex-col items-center relative'>
                    <Image src={drink} width={287} height={321} alt='category' />
                    <div className='category-card'>
                        <p>نوشیدنی</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
    );
};

export default Categories;