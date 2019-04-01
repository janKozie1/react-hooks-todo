import React from 'react';
import { animated } from 'react-spring';

import Week from './Week';
import { formatCalendar } from '../../functions/formatCalendar'


const Month = ({ offset, date, type, selectedDay, selectDay, style, daysWithTasks }) => {

    return (
        <animated.div style={style} className={`calendar-days ${type}`}>
            {formatCalendar(offset, new Date(date.year, date.month, 1)).map((week, i) => {
                return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} year={date.year} daysWithTasks={daysWithTasks}/>
            })}
        </animated.div>
    );
};

export default Month;