'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import LogoutIcon from '../icons/LogoutIcon';

const LogoutButton = () => {
    return (
        <div>
            <button 
                className='flex items-center gap-1 text-tomato' 
                onClick={signOut}><LogoutIcon />خروج
            </button>  
        </div>
    );
};

export default LogoutButton;