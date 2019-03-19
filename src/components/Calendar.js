import React, { useState } from 'react';
import Day from './Day'
import Week from './Week'
import DayOfWeek from './DayOfWeek'
import { Months } from './Months'
import '../styles/Calendar.css'

const Calendar = ({ date }) => {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    let offset = 1;
    const [weekList, setWeekList] = useState(new Array(6).fill(null).map((el, index) => new Array(7).fill(null).map((el2, index2) => <Day day={
        index * 7 + offset + index2 - Number(first.getDay()) + 1 <= 0 ? index * 7 + index2 - Number(first.getDay()) + 1 + offset + Number(Months[first.getMonth() - 1].days) : (index * 7 + offset + index2 - Number(first.getDay())) % Months[first.getMonth()].days + 1
    } />)))
    const [daysList, setDaysList] = useState(new Array(7).fill(null).map((e, index) => <DayOfWeek day={index}/>))
    const today = {
        dayInMonth: date.getDate(),
        dayInWeek: date.getDay(),
        monthNumber: date.getMonth()
    }

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