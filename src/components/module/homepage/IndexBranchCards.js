'use client';
import React, {useState, useEffect} from 'react';
import IndexCard from './IndexCard';

const IndexBranchCards = () => {
    const[data, setData] = useState([]);
    useEffect(()=> {
        const fetchData = async() => {
                await fetch('/api/branch')
                .then(res => res.json())
                .then(data => setData(data.data))
        }
        fetchData()
    },[])
    return (
        <div className='sm:px-10 px-4 text-raven mb-16'>
            <h3 className='font-bold md:text-2xl text-xl md:pb-6 pb-5 text-center'>ترخینه‌گردی</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {!data.length && <p className='font-bold text-lg'>در حال بارگزاری...</p>}
                {data.map((item)=>{
                    return <IndexCard key={item._id} {...item} />
                                             
                })}
            </div>
        </div>
    );
};

export default IndexBranchCards;