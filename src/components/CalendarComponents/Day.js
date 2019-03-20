import React, { useState } from 'react';
import '../../styles/Day.css'
const Day = ({ day }) => {
    return (
        <div className={`day`}>
            {day}
        </div>
    );
};

export default Day;