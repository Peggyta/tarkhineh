'use client';
import React, {useState, useEffect} from 'react';
import IndexCard from './IndexCard';

const IndexBranchCards = () => {
    const[data, setData] = useState([]);
    const[loading, setLoading]= useState(false);
    useEffect(()=> {
        setLoading(true);
        fetch('/api/branch')
        .then(res => res.json())
        .then(data => setData(data.data))
        setLoading(false)
    },[])
    return (
        <div className='sm:px-10 px-4 text-raven mb-16'>
            <h3 className='font-bold md:text-2xl text-xl md:pb-6 pb-5 text-center'>ترخینه‌گردی</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {loading ? ( <div>
                            <p className='text-center font-bold text-lg'>در حال بارگزاری...</p>
                        </div>) : (data.map((item)=>{
                    return <IndexCard key={item._id} {...item} />
                                             
                }))} 
            </div>
        </div>
    );
};

export default IndexBranchCards;