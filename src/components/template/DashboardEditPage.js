'use client';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import DashboardInput from '../module/dashboardItems/DashboardInput';
import CustomDatePicker from '../module/dashboardItems/CustomDatePicker';
import Loader from '../module/Loader';
import EditIcon from '../icons/EditIcon';

const DashboardEditPage = ({data, email}) => {
    const router = useRouter();
    const[loading, setLoading] = useState(false);
    const[dashboardData, setDashboardData] = useState({
        title:'',
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        birthday: data.birthday || new Date(),
        email: email,
        phone: data.phone || '',
        userName: data.userName || '',
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
        <div className='border border-bordercolor rounded-md px-4 h-3/4 hidden md:block lg:mr-4 md:mr-6'>
            <h3 className='text-raven font-bold text-2xl pt-4'>پروفایل من</h3>
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
            {loading ? <Loader /> : data ? (<div className='flex justify-center gap-5'>
                    <button 
                        onClick={editHandler}
                        className='dashboard-button text-white bg-primary hover:text-white hover:bg-hovercolor'>
                        ذخیره
                    </button>  
                    <button 
                        onClick={cancelHandler}
                        className='dashboard-button text-primary '>
                        لغو
                    </button>     
            </div>) : (<div className='flex justify-center'>
                <button 
                    onClick={submitHandler}
                    className='border border-primary rounded-md px-8 hover:text-hovercolor hover:border-hovercolor transition
                    text-primary pt-1 pb-2 flex items-center gap-1'>
                   <EditIcon />ثبت اطلاعات شخصی 
                </button>
            </div>)}
            <Toaster />
        </div>
    );
};

export default DashboardEditPage;