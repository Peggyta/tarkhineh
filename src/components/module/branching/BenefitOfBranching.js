import React from 'react';

const BenefitOfBranching = () => {
    return (
        <div className='text-raven flex flex-col items-center border-t border-b 
        border-bordercolor my-10 pt-8 pb-12 sm:px-10 px-4 gap-6'>
            <h3 className='font-bold text-2xl'>مزیت دریافت نمایندگی</h3>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 text-xl'>
                <div className='flex flex-col gap-5'>
                    <div  className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>استفاده از برند شناخته شده ترخینه</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>به حداقل رساندن ریسک سرمایه‌گذاری</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>تسریع روند بازگشت سرمایه</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>مشاوره‌های تخصصی جهت مدیریت رستوران</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>مشاوره در امور حقوقی، مالی و مالیاتی</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>پشتیبانی بازاریابی و منابع انسانی</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='diamond-shape'></span>
                        <p>طرح‌های تشویقی جهت ارتقای فروش</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitOfBranching;