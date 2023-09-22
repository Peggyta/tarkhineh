import React from 'react';
import connectDB from '@/utils/connectDB';
import TBranch from '@/models/TBranch';
import ContactUs from '@/components/template/ContactUs';

async function ContactPage() {
    await connectDB();
    const branches = await TBranch.find();
    if(!branches) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید</h3>
    return <ContactUs showBranches={JSON.parse(JSON.stringify(branches))}  />
};

export default ContactPage;