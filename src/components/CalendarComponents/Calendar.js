import React, { useState, useEffect } from 'react';
import Day from './Day'
import Week from './Week'
import DayOfWeek from './DayOfWeek'

import { formatCalendar } from '../../functions/formatCalendar'
import { Months } from '../../data/Months'

import '../../styles/Calendar.css'

const Calendar = ({ date }) => {
    
    
    let [offset, setOffset] = useState(2)
    let [selectedDay, setSelectedDay] = useState(new Date().getDate())


    return (
        <div className='calendar'>
        {selectedDay}
            <Week days={['Mo','Tu','We','Th','Fr','Sa','Su']} />
            {
                formatCalendar(offset, new Date(date.getFullYear(), date.getMonth(), 1)).map((week,i)=>{
                    return <Week days={week} key={i}/>
                })
            }
        </div>
    );
};

export default Calendar;