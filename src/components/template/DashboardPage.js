import React from 'react';
import DashboardGetInfo from './DashboardGetInfo';
import ProfileCard from '../module/dashboardItems/ProfileCard';

const DashboardPage = ({data, email, id}) => {
    return (
        <div className='border border-bordercolor rounded-md px-4 h-3/4 hidden md:block lg:mr-4 md:mr-6'>
            <h3 className='text-raven font-bold text-2xl pt-4'>پروفایل من</h3>
            <div className='border-b border-bordercolor mt-3 mb-10 '></div>
            <div className='flex flex-col justify-center'>
                <div>
                    {data.length ? (data.map((i)=> {
                        return (
                        <ProfileCard key={i._id} data={JSON.parse(JSON.stringify(i))} email={email} id={id} />
                    )})): (<DashboardGetInfo />)}
                </div>
            </div>
            
        </div>
    );
};

export default DashboardPage;