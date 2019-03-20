import React, { useState } from 'react';
import Day from './Day'
import Week from './Week'
import DayOfWeek from './DayOfWeek'

import { formatCalendar } from '../functions/formatCalendar'
import { Months } from '../data/Months'

import '../styles/Calendar.css'

const Calendar = ({ date }) => {

    const updateSelectedDay = (e) =>{
        console.log(e)
        setSelectedDay(e)
        console.log(selectedDay,weekList)
    }

    const [offset, setOffset] = useState(2)
    const [selectedDay, setSelectedDay] = useState(new Date().getDate())
    const [weekList, setWeekList] = useState(formatCalendar(offset, new Date(date.getFullYear(), date.getMonth(), 1)).map(e => e.map(f => <Day day={f} updateSelectedDay={updateSelectedDay} selectedDay={selectedDay} />)))
    const [daysList, setDaysList] = useState(new Array(7).fill(null).map((e, index) => <DayOfWeek day={index} offset={offset} />))
    
    
    return (
        <div className='calendar'>
            <Week days={daysList} />
            {
                weekList.map((e, i) => {
                    return <Week days={e} key={i} />
                })
            }
        </div>
    );
};

export default Calendar;