import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

//icons:
import Telegram from '../icons/Telegram';
import twitter from '../icons/twitter.png';
import Instagram from '../icons/Instagram';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerBg}>
                <div className='text-white w-full sm:px-10 px-4 flex justify-between text-sm font-semibold pt-6'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold mb-2 md:text-xl'>دسترسی آسان</h3>
                        <p>پرسش‌های متداول</p>
                        <p>قوانین ترخینه</p>
                        <p>حریم خصوصی</p>
                        <div className='flex gap-4'>
                            <Image src={twitter} width="auto" height="auto" alt='icon'/>
                            <Instagram />
                            <Telegram />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold mb-2 md:text-xl'>شعبه‌های ترخینه</h3>
                        <p>شعبه اکباتان</p>
                        <p>شعبه چالوس</p>
                        <p>شعبه اقدسیه</p>
                        <p>شعبه ونک</p>
                    </div>
                    <div className='md:flex flex-col gap-1 hidden '>
                        <h3 className='font-bold mb-2 text-xl'>پیام به ترخینه</h3>
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col gap-3'>
                                <input 
                                    className='footer-input' 
                                    type='text' 
                                    placeholder='نام و نام‌خانوادگی' />
                                <input 
                                    className='footer-input' 
                                    type='text' 
                                    placeholder='شماره تماس' />
                                <input 
                                    className='footer-input' 
                                    type='text' 
                                    placeholder='آدرس ایمیل(اختیاری)' />
                            </div>
                        <div>
                            <textarea 
                                className='footer-input h-full lg:w-64 md:w-56 w-48' 
                                type='text' 
                                placeholder='پیام شما' />
                        </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className='text-xs'>۰/۲۰۰</p>
                            <button className='border border-neutral rounded-md lg:px-12 px-8 pb-2 pt-1 mt-1 hover:bg-primary transition hover:bg-opacity-25'>
                                ارسال پیام
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;