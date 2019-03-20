import React, { useState } from 'react';
import '../styles/Day.css'
const Day = ({day,selectedDay}) => {
    return (
        <div className={`day ${selectedDay===day?'selected':''}`}>
            {day}
        </div>
    );
};

export default Day;