import React from 'react';

const CheckList = ({formData, setFormData}) => {
    const{amenities} = formData;
    const changeHandler = (e) => {
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div>
            <h4>امکانات ملک متقاضی</h4>
            <div className='grid grid-cols-3 grid-rows-2 gap-3'>
                <div>
                    <div>
                        <input 
                        type='checkbox'
                        name='amenities'
                        value='allow'
                        id='allow'
                        checked={amenities === 'allow'}
                        onChange={changeHandler} />
                        <label htmlFor='allow'>پروانه کسب دارد</label>  
                    </div>
                     <div> 
                        <input
                        name='amenities'
                        value='parking'
                        id='parking'
                        type='checkbox'
                        onChange={changeHandler}
                        checked={amenities === 'parking'} />
                        <label htmlFor='parking'>پارکینگ دارد</label>
                     </div> 
                </div>
                <div>
                    <div>
                        <input
                        type='checkbox'
                        name='amenities'
                        onChange={changeHandler}
                        checked={amenities === 'kitchen'}
                        value='kitchen'
                        id='kitchen' />
                        <label htmlFor='kitchen'>آشپزخانه دارد</label>
                    </div>
                    <div>
                        <input
                        type='checkbox'
                        value='store'
                        id='store'
                        onChange={changeHandler}
                        checked={amenities === 'store'}
                        name='amenities' />
                        <label htmlFor='store'>انبار دارد</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckList;