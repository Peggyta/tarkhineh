'use client';
import React from 'react';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/gregorian_fa";
import '../../../styles/DatePickerStyle.css';

const CustomDatePicker = ({dashboardData, setDashboardData}) => {
    const changeHandler = (e) => {
        const date = new Date(e);
        setDashboardData({...dashboardData, birthday: date});
    }
    return (
        <div>
            <DatePicker 
            value={dashboardData.birthday} 
            onChange={changeHandler}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
            containerClassName="custom-container"
            style={{
                
                height: "36px",
                borderRadius: "6px",
                fontSize: "14px",
                padding: "3px 10px",
                color: "#353535",
              }} />
        </div>
    );
};

export default CustomDatePicker;