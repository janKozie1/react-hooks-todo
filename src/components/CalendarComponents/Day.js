import React from 'react';

import '../../styles/Day.css'
import { compareDays } from '../../functions/comapreDays';

const Day = ({ day, selectedDay, selectDay, month, year }) => {


    return (
        <div
            className={`day ${compareDays(selectedDay, day) ? 'selected' : ''} ${day.month === month ? '' : 'previous'} `}
            onClick={() => selectDay({ day: day.day, month: day.month, year: day.year })} >
            {day.day}
        </div>
    );
};

export default Day;