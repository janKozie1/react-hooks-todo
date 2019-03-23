import React, { useState, useEffect } from 'react';
import Week from './Week'
import DaysNames from './DaysNames'

import { formatCalendar } from '../../functions/formatCalendar'

import '../../styles/Calendar.css'

const Calendar = ({ date,selectedDay,setSelectedDay }) => {


    let [offset, setOffset] = useState(1)
   

    let selectDay = ({ day, month }) => {
        if (!isNaN(parseInt(selectedDay.day)) || day !== selectedDay.day || month !== selectedDay.month) {
            console.log( month !== selectedDay.month)
            setSelectedDay({ day, month })
        } else if (selectedDay.day === day && selectedDay.month === month) {
            setSelectedDay({ day: null, month: null })
        }
    }

    return (
        <div className='calendar'>
            <DaysNames offset={offset} />
            {
                formatCalendar(offset, new Date(date.year,date.month, 1)).map((week, i) => {
                    return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
                })
            }
            <div className='todo'>

            </div>
        </div>
    );
};

export default Calendar;