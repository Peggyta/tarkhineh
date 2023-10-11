import React from 'react';
const DashboardInput = ({
    dashboardData,
    setDashboardData,
    name,
    title,
}) => {
    const changeHandler= (e) => {
        const{name, value} = e.target;
        setDashboardData({...dashboardData, [name]: value});
    };
    return (
        <div>
            <input 
            type='text'
            name={name}
            placeholder={title}
            value={dashboardData[name]}
            onChange={changeHandler}
            className='border border-bordercolor rounded-md lg:w-72 w-full text-sm py-2 pr-3' />
        </div>
    );
};

export default DashboardInput;