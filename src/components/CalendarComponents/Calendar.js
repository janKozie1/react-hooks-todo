import React, { useState, useEffect } from 'react';
import Week from './Week'
import DaysNames from './DaysNames'

import { formatCalendar } from '../../functions/formatCalendar'

import '../../styles/Calendar.css'

const Calendar = ({ date }) => {


    let [offset, setOffset] = useState(1)
    let [selectedDay, setSelectedDay] = useState({day:new Date().getDate(),month:new Date().getMonth()})

    return (
        <div className='calendar'>
            <DaysNames offset={offset} />
            {
                formatCalendar(offset, new Date(date.getFullYear(), date.getMonth(), 1)).map((week, i) => {
                    return <Week days={week} key={i} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                })
            }
        </div>
    );
};

export default Calendar;