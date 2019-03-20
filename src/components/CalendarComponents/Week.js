import React, { useState } from 'react';
import Day from './Day'
import '../../styles/Week.css'
const Week = ({days}) => {
    return (
        <div className='week'>
            {days.map((day,i)=>{
                return <Day key={i} day={day} />
            })}
        </div>
    );
};

export default Week;