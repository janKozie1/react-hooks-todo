import React from 'react';
import Day from './Day'
import '../../styles/Week.css'
const Week = ({ days, offset, selectedDay, selectDay, month, year,daysWithTasks }) => {
    return (
        <div className='week'>
            {days.map((day, i) => {
                return <Day key={i} day={day} month={month} year={year} offset={offset} selectedDay={selectedDay} selectDay={selectDay} daysWithTasks={daysWithTasks}/>
            })}
        </div>
    );
};

export default Week;