import React, { useState } from 'react';

import Week from './Week';
import { formatCalendar } from '../../functions/formatCalendar'

const Month = ({ offset, date, type, selectedDay, selectDay }) => {
    return (
        <div className={`calendar-days ${type}`}>
            {formatCalendar(offset, new Date(date.year, date.month, 1)).map((week, i) => {
                return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
            })}
        </div>
    );
};

export default Month;