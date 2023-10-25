'use client';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import DashboardInput from '../module/dashboardItems/DashboardInput';
import CustomDatePicker from '../module/dashboardItems/CustomDatePicker';
import Loader from '../module/Loader';


const DashboardEditPage = ({data}) => {
    const{userName, firstName, lastName, phone, birthday} = data;
    const router = useRouter();
    const[loading, setLoading] = useState(false);
    const[dashboardData, setDashboardData] = useState({
        title:'',
        firstName: firstName || '',
        lastName: lastName || '',
        birthday: birthday || new Date(),
        phone: phone || '',
        userName: userName || '',
    });
    
      
    const editHandler = async() => {
        setLoading(true);
        const res = await fetch('/api/profile', {
            method: 'PATCH',
            body: JSON.stringify(dashboardData),
            headers: {'Content-Type': 'application/json'},
        });
        const data = await res.json();
        setLoading(false);
        if(data.error) {
            toast.error(data.error);
        } else {
            toast.success(data.message);
            router.refresh();
        }
    };

    const cancelHandler = () => {
        router.push('/dashboard')
    };

    useEffect(()=> {
        if(data) setDashboardData(data)
    },[]);
    
    return (
        <div className=' border border-bordercolor rounded-md px-4 h-3/4 hidden md:block lg:mr-4 md:mr-6'>
            <h3 className='text-raven font-bold text-2xl pt-4'>ویرایش اطلاعات شخصی</h3>
            <div className='border-b border-bordercolor mt-3 mb-10 '></div>
            <div className='grid grid-cols-2 place-items-center gap-5 pb-10'>
                <DashboardInput
                name='firstName'
                title='نام' 
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                />
        
                <DashboardInput
                name='lastName'
                title='نام خانوادگی'
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                />

                <DashboardInput
                name='email'
                title='ایمیل'
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                />

                <DashboardInput
                name='phone'
                title='شماره همراه'
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                />

                <CustomDatePicker 
                dashboardData={dashboardData}
                setDashboardData={setDashboardData} />

                <DashboardInput
                name='userName'
                title='نام نمایشی'
                dashboardData={dashboardData}
                setDashboardData={setDashboardData}
                 />
            </div>
            <div className='flex justify-center gap-5'>
                {loading ? <Loader /> : (<button 
                    onClick={editHandler}
                    className='dashboard-button text-white bg-primary hover:text-white hover:bg-hovercolor'>
                    ذخیره
                </button> )}
                <button 
                    onClick={cancelHandler}
                    className='dashboard-button text-primary bg-white hover:text-primary hover:border-hovercolor'>
                    لغو
                </button>       
            </div>
            <Toaster />
        </div>
    );
};

export default DashboardEditPage;