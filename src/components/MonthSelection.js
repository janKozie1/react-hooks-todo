import React from 'react';
import { Months } from '../data/Months';
import '../styles/MonthSelection.css'
const MonthSelection = ({ month, setDate, date }) => {
    return (
        <div className='month-selection'>
            <div onClick={() => setDate(_ => {
                return date.month - 1 < 0 ? { year: date.year - 1, month: 11, day: null } : { ...date, month: date.month - 1 }
            })} className='month-selection-button left'></div>
            <p>{Months[month].name}</p>
            <div onClick={() => setDate(_ => {
                return date.month + 1 > 11 ? { year: date.year + 1, month: 0, day: null } : { ...date, month: date.month + 1 }
            })} className='month-selection-button right'></div>
        </div >
    );
};

export default MonthSelection;