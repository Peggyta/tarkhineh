'use client';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import DashboardInput from '../module/dashboardItems/DashboardInput';
import CustomDatePicker from '../module/dashboardItems/CustomDatePicker';
import Loader from '../module/Loader';
import EditIcon from '../icons/EditIcon';

const DashboardGetInfo = () => {
    const router = useRouter();
    const[loading, setLoading] = useState(false);
    const[dashboardData, setDashboardData] = useState({
        title:'',
        firstName: '',
        lastName: '',
        birthday: new Date(),
        phone: '',
        userName: '',
    });
    const submitHandler= async() => {
        setLoading(true);
        const res = await fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify(dashboardData),
            headers: {'Content-Type': 'application/json'},
        });
        const data = await res.json();
        setLoading(false);
        if(data.error) {
            toast.error(data.error)
        } else {
            toast.success(data.message);
            router.refresh()
        }
    };

    
    return (
        <div className=' px-4 h-3/4 hidden md:block lg:mr-4 md:mr-6'>
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
             <div className='flex justify-center'>
                {loading ? <Loader /> : (<button 
                    onClick={submitHandler}
                    className='border border-primary rounded-md px-8 hover:text-hovercolor hover:border-hovercolor transition
                    text-primary pt-1 pb-2 flex items-center gap-1'>
                   <EditIcon />ثبت اطلاعات شخصی 
                </button>)}       
            </div>
            <Toaster />
        </div>
    );
};

export default DashboardGetInfo;