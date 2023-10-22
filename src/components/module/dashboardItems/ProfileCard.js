import React from 'react';
import Link from 'next/link';
import EditIcon from '@/components/icons/EditIcon';

const ProfileCard = ({data, email, id}) => {
    const{userName, firstName, lastName, phone, birthday} = data;

    return (
        <>
        <div className='grid grid-cols-2 place-items-center gap-8 pb-10 text-raven '>
            <p>نام: <span className='text-primary font-bold'>{firstName}</span></p>
            <p>نام خانوادگی: <span className='text-primary font-bold'>{lastName}</span></p>
            <p>ایمیل: <span className='text-primary font-bold'>{email}</span></p>
            <p>تلفن: <span className='text-primary font-bold'>{phone}</span></p>
            <p>تاریخ تولد: <span className='text-primary font-bold'>{new Date(birthday).toLocaleDateString('fa-IR')}</span></p>
            <p>نام نمایشی: <span className='text-primary font-bold'>{userName}</span></p>
        </div>
        <div className='flex justify-center'>
            <Link 
            className='border border-primary rounded-md px-8 hover:text-hovercolor hover:border-hovercolor transition
            text-primary pt-1 pb-2 gap-1 flex items-center'
            href={`/dashboard/edit/${id}`}><EditIcon />ویرایش اطلاعات شخصی</Link>
        </div>
        </>
    );
};

export default ProfileCard;