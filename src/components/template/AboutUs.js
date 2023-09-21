import React from 'react';
import Image from 'next/image';
import AboutFeatures from '../module/aboutme/AboutFeatures';
import restaurant from '../../../public/images/restaurant.jpg';
import styles from '../../styles/AboutUs.module.css';


const AboutUs = () => {
    return (
        <div>
            <div className={styles.aboutUs}>
                <h2 className='h-full text-white font-bold flex items-center text-2xl sm:text-4.5xl justify-center'>
                    درباره ترخینه بیشتر بدانید!
                </h2>
            </div>
            <div className='py-10 sm:px-10 px-4'>
                <h3 className='font-bold sm:text-2xl text-base text-raven pb-6'>درباره ما</h3>
                <div className='flex lg:flex-row flex-col-reverse gap-6'>
                    <div className=' w-full lg:w-5/6'>
                        <p className='text-neutral sm:text-xl text-sm text-justify inline-block leading-9 '>
                        رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند
                        و در طی این سال‌ها همواره با ارائه
                        غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب 
                        رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است.
                        دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت
                        غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های
                        مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه
                        شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
                        برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی
                        با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا
                        به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و
                        سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.<br />
                        چشم انداز: در آینده‌ای نزدیک تالار         
                        پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها
                        و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
                        </p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <Image src={restaurant} alt='resaurant' width={600} height={496}  />
                    </div>
                </div>
            </div> 
            <AboutFeatures />
        </div>
    );
};

export default AboutUs;