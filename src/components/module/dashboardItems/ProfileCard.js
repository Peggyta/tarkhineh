import React from 'react';

const ProfileCard = ({data, email}) => {
    const{userName, firstName, lastName, phone, birthday} = data;

    return (
        <div className='grid grid-cols-2 place-items-center gap-8 pb-10 text-raven '>
            <p>نام: <span className='text-primary font-bold'>{firstName}</span></p>
            <p>نام خانوادگی: <span className='text-primary font-bold'>{lastName}</span></p>
            <p>ایمیل: <span className='text-primary font-bold'>{email}</span></p>
            <p>تلفن: <span className='text-primary font-bold'>{phone}</span></p>
            <p>تاریخ تولد: <span className='text-primary font-bold'>{new Date(birthday).toLocaleDateString('fa-IR')}</span></p>
            <p>نام نمایشی: <span className='text-primary font-bold'>{userName}</span></p>
        </div>
    );
};

export default ProfileCard;