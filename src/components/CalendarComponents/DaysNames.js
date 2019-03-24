import React, { useState } from 'react';
import '../../styles/Day.css'
import '../../styles/Week.css'

const DaysNames = ({ offset, setOffset }) => {
    
    const days = [
        {
            abbr:'Su',
            offset:0,
        },
        {
            abbr:'Fr',
            offset:6,
        },
        {
            abbr:'Tu',
            offset:5,
        },
        {
            abbr:'We',
            offset:4,
        },
        {
            abbr:'Th',
            offset:3,
        },
        {
            abbr:'Fr',
            offset:2,
        },
        {
            abbr:'Sa',
            offset:1,
        },
    ]
    return (
        <div className='week upper-row'>
            {days.map((e, i) => {
                let temp = (7 + i - offset) % days.length;
                return <div className='day' onClick={()=>setOffset(days[temp].offset)} key={i}>{days[temp].abbr}</div>
            })}
        </div>
    );
};

export default DaysNames;