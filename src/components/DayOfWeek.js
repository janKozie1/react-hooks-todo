import React, { useState } from 'react';
import '../styles/Day.css'
const Day = ({day}) => {
    const days = ['M', 'T','W','T','F','S','S']
    return (
        <div className='day'>
            {days[day]}
        </div>
    );
};

export default Day;