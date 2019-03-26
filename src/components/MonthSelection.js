import React from 'react';
import { Months } from '../data/Months';
import '../styles/MonthSelection.css'
const MonthSelection = ({ month, setDirection }) => {
    return (
        <div className='month-selection'>
            <div onClick={() => {
                setDirection('back')
            }} className='month-selection-button left'></div>
            <p>{Months[month].name}</p>
            <div onClick={() => {
                setDirection('forward')
            }} className='month-selection-button right'></div>
        </div >
    );
};

export default MonthSelection;