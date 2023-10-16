import React from 'react';
import Link from 'next/link';
import ProfileCard from '../module/dashboardItems/ProfileCard';
import EditIcon from '../icons/EditIcon';

const DashboardPage = ({data, email}) => {

    return (
        <div className='border border-bordercolor rounded-md px-4 h-3/4'>
            <h3 className='text-raven font-bold text-2xl pt-4'>پروفایل من</h3>
            <div className='border-b border-bordercolor mt-3 mb-10 '></div>
            <div className='flex flex-col justify-center'>
                <div>
                    {data.map((i)=> {
                        return (
                            <ProfileCard key={i._id} data={JSON.parse(JSON.stringify(i))} {...email} />
                        )
                    })} 
                </div>
                <div className='flex justify-center'>
                    <Link 
                        href='/dashboard/edit'
                        className='border border-primary rounded-md px-8 hover:text-hovercolor hover:border-hovercolor transition
                        text-primary pt-1 pb-2 flex items-center gap-1'>
                        <EditIcon />ویرایش اطلاعات شخصی 
                    </Link>
                </div>    
            </div>
        </div>
    );
};

export default DashboardPage;