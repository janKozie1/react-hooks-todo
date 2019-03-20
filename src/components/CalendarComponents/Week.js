import React, { useState } from 'react';
import Day from './Day'
import '../../styles/Week.css'
const Week = ({ days, offset, selectedDay, setSelectedDay }) => {
    return (
        <div className='week'>
            {days.map((day, i) => {
                return <Day key={i} day={day} offset={offset} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            })}
        </div>
    );
};

export default Week;