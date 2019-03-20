import React, { useState } from 'react';
import '../../styles/Day.css'
const Day = ({day, offset}) => {
    const days = ['Su','Mo', 'Tu','We','Th','Fr','Sa']
    return (
        <div className='day'>
            {days[(day+offset)%days.length]}
        </div>
    );
};

export default Day;