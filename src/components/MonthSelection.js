import React from 'react';
import {Months} from '../data/Months';
import '../styles/MonthSelection.css'
const MonthSelection = ({month}) => {
    return (
        <div className='month-selection'>
            <div className='month-selection-button left'></div>
            <p>{Months[month].name}</p>
            <div className='month-selection-button right'></div>
        </div>
    );
};

export default MonthSelection;