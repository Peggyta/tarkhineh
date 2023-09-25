'use client';
import React, {useState} from 'react';
import Features from '../module/branching/Features';
import BenefitOfBranching from '../module/branching/BenefitOfBranching';
import TextInput from '../module/branching/TextInput';
import styles from '../../styles/Branches.module.css';

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

    })
    return (
        <div>
            <div className={styles.branchBanner}>
                <h2 className='h-full text-white text-center font-bold flex items-center text-2xl sm:text-4.5xl justify-center'>
                    همین الان به خانواده بزرگ ترخینه بپیوندید!
                </h2>
            </div>
            <Features />
            <BenefitOfBranching />
            <div className='flex flex-col items-center text-raven'>
                <h3 className='font-bold text-2xl'>دریافت مشاوره</h3>
                <div className='flex'>
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
                <button className='bg-primary text-white'>درخواست مشاوره</button>
            </div>
        </div>
    );
};

export default Branches;