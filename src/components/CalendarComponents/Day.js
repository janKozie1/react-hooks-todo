import React, { useState } from 'react';
import '../../styles/Day.css'

const Day = ({ day, selectedDay, selectDay, month }) => {
    let selected = selectedDay.day === day.day && selectedDay.month === day.month;
    return (
        <div
            className={`day ${selected ? 'selected' : ''} ${day.month === month ? '' : 'previous'} `}
            onClick={() => selectDay({ day:selected?null: day.day, month:selected?null: day.month })} >
            {day.day}
        </div>
    );
};

export default Day;