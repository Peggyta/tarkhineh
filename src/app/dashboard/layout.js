import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import { redirect } from 'next/navigation';
import User from '@/models/User';

export const metadata = {
    title: 'پنل کاربری ترخینه',
};

async function DashboardLayout ({children}) {
    const session = await getServerSession(authOptions);
    if(!session) redirect('/signin');
    const user = await User.findOne({email: session.user.email});
    if(!user) return <h3 className='text-xl text-raven font-bold'>مشکلی پیش آمده است</h3>
    return (
        <div className='sm:px-10 px-4 pt-6'>
            <DashboardSidebar role={user.role} email={user.email}>
                {children}
            </DashboardSidebar>     
        </div>
    );
};

export default DashboardLayout;