import React from 'react';
import connectDB from '@/utils/connectDB';
import TBranch from '@/models/TBranch';
import Branches from '@/components/template/Branches';

async function BranchesPage() {
    await connectDB();
    const branches = await TBranch.find();
    if(!branches) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید</h3>
    return <Branches showBranches={JSON.parse(JSON.stringify(branches))}  />
};

export default BranchesPage;