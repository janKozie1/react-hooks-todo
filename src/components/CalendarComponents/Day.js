import React, { useState } from 'react';
import '../../styles/Day.css'

const Day = ({ day, selectedDay, setSelectedDay }) => {
    return (
        <div className={`day ${selectedDay.day === day.day && selectedDay.month === day.month ? 'selected' : ''}`} onClick={() => setSelectedDay({ day : day.day, month : day.month })} >
            {day.day}
        </div>
    );
};

export default Day;