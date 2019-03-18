import React, { useState } from 'react';
import '../styles/Day.css'
const Day = (props) => {
    return (
        <div className='day'>
            {props.day}
        </div>
    );
};

export default Day;