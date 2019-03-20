import React, { useState } from 'react';
import '../styles/Day.css'
const Day = ({ day, selectedDay, updateSelectedDay }) => {
    console.log(selectedDay)
    return (
        <div className={`day ${selectedDay === day ? 'selected' : ''}`} onClick={() =>{
            updateSelectedDay(day)
        }}>
            {day}
        </div>
    );
};

export default Day;