import React, { useState, useEffect } from 'react';

import DaysNames from './DaysNames'
import Month from './Month'

import '../../styles/Calendar.css'

const Calendar = ({ date, selectedDay, setSelectedDay }) => {


    let [offset, setOffset] = useState(2)
    let previousMonth = date.month - 1 < 0 ? { year: date.year - 1, month: 11 } : { year: date.year, month: date.month - 1 };
    let nextMonth = date.month + 1 > 11 ? { year: date.year + 1, month: 0 } : { year: date.year, month: date.month + 1 };

    let selectDay = ({ day, month }) => {
        if (!isNaN(parseInt(selectedDay.day)) || day !== selectedDay.day || month !== selectedDay.month) {
            console.log(month !== selectedDay.month)
            setSelectedDay({ day, month })
        } else if (selectedDay.day === day && selectedDay.month === month) {
            setSelectedDay({ day: null, month: null })
        }
    }

    return (
        <div className='calendar'>
            <DaysNames offset={offset} setOffset={setOffset} />
            <div className='calendar-days-container'>
                {/* <div className='calendar-days previous'>
                {
                    formatCalendar(offset, new Date(previousMonth.year, previousMonth.month, 1)).map((week, i) => {
                        return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
                    })
                }
                </div>
                <div className='calendar-days current'>
                {
                    formatCalendar(offset, new Date(date.year, date.month, 1)).map((week, i) => {
                        return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
                    })
                }
                </div>
                <div className='calendar-days next'>
                {
                    formatCalendar(offset, new Date(nextMonth.year, nextMonth.month, 1)).map((week, i) => {
                        return <Week days={week} key={i} selectedDay={selectedDay} selectDay={selectDay} month={date.month} />
                    })
                }
                </div> */}
                <Month offset={offset} date={previousMonth} type={'previous'} selectedDay={selectedDay} selectDay={selectDay} />
                <Month offset={offset} date={date} type={'current'} selectedDay={selectedDay} selectDay={selectDay} />
                <Month offset={offset} date={nextMonth} type={'next'} selectedDay={selectedDay} selectDay={selectDay} />

            </div>
        </div>
    );
};

export default Calendar;