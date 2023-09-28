'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

//icons:
import Telegram from '../icons/Telegram';
import twitter from '../icons/twitter.png';
import Instagram from '../icons/Instagram';

const Footer = () => {
    const MAX_TEXT_LENGTH = 200;
    const[text, setText] = useState('');
    function textLimiter(event) {
        const value = event.target.value;
        if(value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }
    return (
        <footer>
            <div className={styles.footerBg}>
                <div className='text-white w-full sm:px-10 px-4 flex justify-between text-sm font-semibold pt-6'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold mb-2 md:text-xl'>دسترسی آسان</h3>
                        <Link href='/'>پرسش‌های متداول</Link>
                        <Link href='/'>قوانین ترخینه</Link>
                        <Link href='/'>حریم خصوصی</Link>
                        <div className='flex gap-4'>
                            <a href='#' target='_blank' rel='noopener noreferrer'>
                                <Image src={twitter} width="auto" height="auto" alt='icon'/>
                            </a>
                            <a href='#' target='_blank' rel='noopener noreferrer'><Instagram /></a>
                            <a href='#' target='_blank' rel='noopener noreferrer'><Telegram /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold mb-2 md:text-xl'>شعبه‌های ترخینه</h3>
                        <Link href='/branches'>شعبه اکباتان</Link>
                        <Link href='/branches'>شعبه چالوس</Link>
                        <Link href='/branches'>شعبه اقدسیه</Link>
                        <Link href='/branches'>شعبه ونک</Link>
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
                                value={text} 
                                onChange={textLimiter}
                                className='footer-input h-full lg:w-64 md:w-56 w-48'  
                                placeholder='پیام شما' />
                        </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className='text-xs'>
                            {` ${MAX_TEXT_LENGTH} / ${text.length}`}</p>
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