import React, { useState } from 'react';
import '../styles/Week.css'
const Week = ({days}) => {
    return (
        <div className='week'>
            {days.map(e=>e)}
        </div>
    );
};

export default Week;