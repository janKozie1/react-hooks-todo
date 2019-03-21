import React, { useState } from 'react';
import '../../styles/Day.css'
import '../../styles/Week.css'

const DaysNames = ({ offset }) => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    return (
        <div className='week upper-row'>
            {days.map((e, i) => {
                return <div className='day' key={i}>{days[(i + offset)%days.length]}</div>
            })}
        </div>
    );
};

export default DaysNames;