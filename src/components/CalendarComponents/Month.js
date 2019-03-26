import React, { useState } from 'react';

import Week from './Week';
import { formatCalendar } from '../../functions/formatCalendar'
import { useSpring, animated ,config} from 'react-spring';

const Month = ({ offset, date, type, selectedDay, selectDay, style }) => {
    return (
        <animated.div style={style} className={`calendar-days ${type}`}>
            {formatCalendar(offset, new Date(date.year, date.month, 1)).map((week, i) => {
                return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
            })}
        </animated.div>
    );
};

export default Month;