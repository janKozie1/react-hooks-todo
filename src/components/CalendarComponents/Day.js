import React from 'react';

import { compareDays } from '../../functions/comapreDays';

import '../../styles/Day.css'

const Day = ({ day, selectedDay, selectDay, month, daysWithTasks }) => {
    let hasTasks = daysWithTasks.filter(e => compareDays(day, e)).filter(e => e).length;
    return (
        <div
            className={`day ${compareDays(selectedDay, day) ? 'selected' : ''} ${hasTasks ? 'with-tasks' : ''} ${day.month === month ? '' : 'previous'} `}
            onClick={() => selectDay({ day: day.day, month: day.month, year: day.year })} >
            {day.day}
        </div>
    );
};

export default Day;