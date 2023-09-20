import React from 'react';
import Image from 'next/image';
//icons
import chart from '../../icons/chart.jpg';
import Notebook from '../../icons/Notebook';
import Person from '../../icons/Person';
import wifi from '../../icons/wifi.jpg';

const AboutFeatures = () => {
    return (
        <div className='bg-ash flex justify-between items-center sm:px-10 px-4 text-neutral sm:text-lg text-xs h-40'>
                <div className='flex gap-2 flex-col items-center'>
                    <div className='hidden sm:block'><Person /></div>
                    <div className='sm:hidden block'><Image src={wifi} alt='icon' width={30} height={30} /></div>
                    <div>
                        <p>پرسنلی مجرب و حرفه‌ای</p>
                    </div>    
                </div>
                <div className='flex flex-col sm:gap-3 gap-2 items-center'>
                    <div className='hidden sm:block'><Image src={chart} alt='icon' width={48} height={48} /></div>
                    <div className='sm:hidden block'><Image src={wifi} alt='icon' width={30} height={30} /></div>
                    <div>
                        <p>کیفیت بالای غذاها</p>
                    </div>    
                </div>
                <div className='flex flex-col sm:gap-3 gap-2 items-center '>
                    <div className='hidden sm:block'><Image src={wifi} alt='icon' width={48} height={48} /></div>
                    <div className='sm:hidden block'><Image src={wifi} alt='icon' width={30} height={30} /></div>
                    <div>
                        <p>محیطی دلنشین و آرام</p>
                    </div>    
                </div>
                <div className='flex gap-2 flex-col items-center '>
                    <div className='hidden sm:block'><Notebook /></div>
                    <div className='sm:hidden block'><Image src={wifi} alt='icon' width={30} height={30} /></div>
                    <div>
                        <p>منوی متنوع</p>
                    </div>    
                </div>
            </div>
    );
};

export default AboutFeatures;