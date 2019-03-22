import React, { useState } from 'react';
import '../../styles/Day.css'

const Day = ({ day, selectedDay, selectDay }) => {
    let selected = selectedDay.day === day.day && selectedDay.month === day.month;
    return (
        <div
            className={`day ${selected ? 'selected' : ''} ${day.month === new Date().getMonth() ? '' : 'previous'} `}
            onClick={() => selectDay({ day: day.day, month: day.month })} >
            {day.day}
        </div>
    );
};

export default Day;