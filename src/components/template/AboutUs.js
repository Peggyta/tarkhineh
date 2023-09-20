import React from 'react';
import Image from 'next/image';
import restaurant from '../../../public/images/restaurant.jpg';
import styles from '../../styles/AboutUs.module.css';
//icons
import chart from '../icons/chart.jpg';
import Notebook from '../icons/Notebook';
import Person from '../icons/Person';
import wifi from '../icons/wifi.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className={styles.aboutUs}>
                <h2 className='h-full text-white font-bold flex items-center text-4.5xl justify-center'>
                    درباره ترخینه بیشتر بدانید!
                </h2>
            </div>
            <div className='my-10 sm:px-10 px-4'>
                <h3 className='font-bold text-2xl text-raven pb-6'>درباره ما</h3>
                <div className='flex h-496 gap-6'>
                    <div className='h-full'>
                        <p className='text-neutral text-xl text-justify inline-block h-full leading-9'>
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
                    <Image src={restaurant} alt='resaurant' width={600} height={496} />
                </div>
            </div> 
            <div className='bg-ash flex justify-between items-center sm:px-10 px-4 text-neutral text-lg h-40'>
                <div className='flex gap-2 flex-col items-center '>
                    <div><Person /></div>
                    <div>
                        <p>پرسنلی مجرب و حرفه‌ای</p>
                    </div>    
                </div>
                <div className='flex flex-col gap-3 items-center '>
                    <div><Image src={chart} alt='icon' width={48} height={48} /></div>
                    <div>
                        <p>کیفیت بالای غذاها</p>
                    </div>    
                </div>
                <div className='flex flex-col gap-3 items-center '>
                    <div><Image src={wifi} alt='icon' width={48} height={48} /></div>
                    <div>
                        <p>محیطی دلنشین و آرام</p>
                    </div>    
                </div>
                <div className='flex gap-2 flex-col items-center '>
                    <div><Notebook /></div>
                    <div>
                        <p>منوی متنوع</p>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;