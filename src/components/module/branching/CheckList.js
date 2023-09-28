import React from 'react';
import ImageUploader from './ImageUploader';

const CheckList = ({formData, setFormData}) => {
    const changeHandler = (e) => {
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div className='text-raven text-sm my-6'>
            <div className='w-full pt-4 font-bold text-lg pb-5'>
                <h4 className='text-center md:text-right md:pb-0'>امکانات ملک متقاضی</h4>
            </div>
            <div className='grid lg:grid-cols-3 grid-rows-2 grid-cols-1 gap-3 md:px-0 sm:px-20 px-12'>
                <div>
                    <div className='flex items-center gap-2 pb-2'>
                        <input 
                        type='checkbox'
                        name='amenities'
                        value='allow'
                        id='allow'
                        onChange={changeHandler} />
                        <label htmlFor='allow'>پروانه کسب دارد</label>  
                    </div>
                     <div className='flex items-center gap-2'> 
                        <input
                        name='amenities'
                        value='parking'
                        id='parking'
                        type='checkbox'
                        onChange={changeHandler} />
                        <label htmlFor='parking'>پارکینگ دارد</label>
                     </div> 
                </div>
                <div>
                    <div className='flex items-center gap-2 pb-2'>
                        <input
                        type='checkbox'
                        name='amenities'
                        onChange={changeHandler}
                        value='kitchen'
                        id='kitchen' />
                        <label htmlFor='kitchen'>آشپزخانه دارد</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input
                        type='checkbox'
                        value='store'
                        id='store'
                        onChange={changeHandler}
                        name='amenities' />
                        <label htmlFor='store'>انبار دارد</label>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <ImageUploader />
                </div>
            </div>
        </div>
    );
};

export default CheckList;