import React, { useState } from 'react';
import Day from './Day'
import '../../styles/Week.css'
const Week = ({ days, offset, selectedDay, selectDay }) => {
    return (
        <div className='week'>
            {days.map((day, i) => {
                return <Day key={i} day={day} offset={offset} selectedDay={selectedDay} selectDay={selectDay} />
            })}
        </div>
    );
};

export default Week;