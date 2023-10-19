import React from 'react';
import Link from 'next/link';
import styles from '@/styles/FeatureBanner.module.css';
//icons
import LeftArrow from '@/components/icons/LeftArrow';
import WifiOne from '@/components/icons/WifiOne';
import NoteOne from '@/components/icons/NoteOne';
import SellOne from '@/components/icons/SellOne';
import EquipmentOne from '@/components/icons/EquipmentOne';

const FeatureBanner = () => {
    return (
        <div className='mb-8'>
            <div className={styles.bannerOfFeatures}>
                <div className='flex md:flex-row flex-col md:gap-4 gap-6 text-white sm:px-10 px-4 justify-between sm:py-10 py-4'>
                    <div>
                        <h3 className='font-bold md:text-2xl text-base md:pb-6 pb-3'>رستوران‌های زنجیره‌ای ترخینه</h3>
                        <div className='lg:w-600 md:w-470 w-full text-justify'>
                            <p className='md:text-xl text-xs leading-8'>
                        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از   20       
                                سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
                                زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی
                                مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                            </p>
                        </div>
                        <div className='flex justify-end pt-4 lg:pt-0'>
                            <Link href='/about-us' className='flex items-center justify-center pt-1 pb-2 border border-white rounded-sm w-36 hover:border-primary md:text-base text-sm'>
                                اطلاعات بیشتر<span className='pt-1 hover:stroke-primary'><LeftArrow /></span>
                            </Link>
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-2 place-items-center lg:gap-10 gap-6 w-1/3 md:mx-0 mx-auto md:w-fit w-full'>
                        <div className='flex items-center flex-col'>
                            <EquipmentOne />
                            <p className='text-sm lg:text-base text-center pt-1'>پرسنلی مجرب و حرفه‌ای</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <SellOne />
                            <p className='text-sm lg:text-base text-center pt-1'>کیفیت بالای غذاها</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <WifiOne />
                            <p className='text-sm lg:text-base text-center pt-1'>محیطی دلنشین و آرام</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <NoteOne />
                            <p className='text-sm lg:text-base text-center pt-1'>منوی متنوع</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBanner;