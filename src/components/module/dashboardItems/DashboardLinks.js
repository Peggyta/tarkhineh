'use client';
import React from 'react';
import Link from 'next/link';
import PanelUser from '@/components/icons/PanelUser';
import SLocation from '@/components/icons/SLocation';
import WalletIcon from '@/components/icons/WalletIcon';
import HeartIcon from '@/components/icons/HeartIcon';

const DashboardLinks = () => {

    return (
        <div className="flex flex-col text-raven gap-3 pt-2">
            <Link className="flex items-center gap-1" href='/dashboard'><PanelUser />پروفایل</Link>
            <Link className="flex items-center gap-1" href='/dashboard/my-orders'><WalletIcon/>پیگیری سفارشات</Link>
            <Link className="flex items-center gap-1" href='/dashboard/my-intrests'><HeartIcon />علاقمندی‌ها</Link>
            <Link className="flex items-center gap-1" href='/dashboard/my-address'><SLocation />آدرس‌های من</Link>
        </div>
    );
};

export default DashboardLinks;