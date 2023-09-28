'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Features from '../module/branching/Features';
import BenefitOfBranching from '../module/branching/BenefitOfBranching';
import TextInput from '@/components/module/branching/TextInput';
import CheckList from '../module/branching/CheckList';
import styles from '../../styles/Branches.module.css';
import location from '../../../public/images/location.png';

const Branches = () => {
    const[formData, setFormData] = useState({
        title:'',
        identity: '',
        nationalId: '',
        phone: '',
        perfectTime: '',
        state: '',
        city: '',
        region: '',
        typeOfOwnership: '',
        area: '',
        ageOfBuilding: '',
        amenities: '',
        address: [],
    });
    return (
        <div className='pb-10'>
            <div className={styles.branchBanner}>
                <h2 className='h-full text-white sm:px-10 px-4 text-center font-bold flex items-center text-2xl 
                sm:text-4.5xl justify-center'>
                    همین الان به خانواده بزرگ ترخینه بپیوندید!
                </h2>
            </div>
            <Features />
            <BenefitOfBranching />
            <div className='flex flex-col items-center text-raven mt-8 my-10 border-b pb-6 border-bordercolor w-full sm:px-10 px-4'>
                <h3 className='font-bold text-2xl'>دریافت مشاوره</h3>
                <div className='flex md:flex-row flex-col items-center w-3/4 md:w-full 
                md:justify-evenly gap-3 py-6'>
                    <TextInput
                    title='نام و نام‌خانوادگی'
                    name='identity'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='شماره تماس'
                    name='phone'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='زمان ایده‌آل'
                    name='perfectTime'
                    formData={formData}
                    setFormData={setFormData} />
                </div>
                <button className='bg-primary text-white px-4 pt-1 pb-2 hover:bg-emerald-600 
                transition rounded-sm'>
                    درخواست مشاوره
                </button>
            </div>
            <div className='border mt-6 border-bordercolor rounded-md w-full pb-6'>
            <div className='flex flex-col sm:px-10 px-4 items-center text-raven mt-8 mt-10 pt-8 w-full sm:px-10 px-4'>
                <h3 className='font-bold text-2xl'>فرم درخواست نمایندگی</h3>
                <div className='w-full pt-4 font-bold text-lg'>
                    <h4 className='text-center md:text-right'>مشخصات فردی متقاضی</h4>
                </div>
                <div className='flex md:flex-row flex-col items-center w-3/4 md:w-full 
                md:justify-evenly gap-3 pt-6'>
                    <TextInput
                    title='نام و نام‌خانوادگی'
                    name='identity'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='کد ملی'
                    name='identity'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='شماره تماس'
                    name='phone'
                    formData={formData}
                    setFormData={setFormData} />
                </div>
            </div>
            <div className='w-full pt-12 font-bold text-lg sm:px-10 px-4'>
                    <h4 className='text-center md:text-right lg:pb-0 pb-6'>آدرس ملک متقاضی</h4>
            </div>
            <div className='flex flex-col lg:flex-row sm:px-10 px-4 items-center text-raven lg:gap-2 gap-4 '>
                <div className='grid md:grid-cols-2 grid-col-1 gap-3 w-full md:place-items-start place-items-center '>
                    <div className='w-3/4 md:w-full'>
                        <div className='md:mb-4 mb-3'>
                            <TextInput
                            title='استان'
                            name='state'
                            formData={formData}
                            setFormData={setFormData} />
                        </div>
                        <div className='md:mb-4 '>
                            <TextInput
                            title='شهر'
                            name='city'
                            formData={formData}
                            setFormData={setFormData} />
                        </div> 
                    </div>
                    <div className='w-3/4 md:w-full '>
                        <div className='md:mb-4 mb-3'>
                            <TextInput
                            title='منطقه'
                            name='region'
                            formData={formData}
                            setFormData={setFormData} />
                        </div>
                        <TextInput
                        title='آدرس دقیق'
                        name='address'
                        formData={formData}
                        setFormData={setFormData}
                        textarea={true} />    
                    </div>
                </div>
                <div className='xl:w-fit md:w-1/2 w-full '>
                    <Image src={location} width={640} height={200} alt='location' />
                </div>
            </div>
            <div className='flex flex-col sm:px-10 px-4 pt-6 items-center text-raven w-full sm:px-10 px-4'>
                <div className='w-full pt-4 font-bold text-lg'>
                    <h4 className='text-center md:text-right'>مشخصات ملک متقاضی</h4>
                </div>
                <div className='flex md:flex-row flex-col items-center w-3/4 md:w-full 
                md:justify-evenly gap-3 pt-6'>
                    <TextInput
                    title='نوع مالکیت'
                    name='typeOfOwnership'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='مساحت ملک(متر مربع)'
                    name='area'
                    formData={formData}
                    setFormData={setFormData} />

                    <TextInput
                    title='سن بنا'
                    name='ageOfBuilding'
                    formData={formData}
                    setFormData={setFormData} />
                </div>
                <div className='w-full'>
                    <CheckList
                    formData={formData}
                    setFormData={setFormData} />
                </div>
                <button className='bg-primary text-white px-8 pt-1 pb-2 hover:bg-emerald-600 
                transition rounded-sm'>
                    ثبت اطلاعات
                </button>
                </div>
            </div>
        </div>
    );
};

export default Branches;