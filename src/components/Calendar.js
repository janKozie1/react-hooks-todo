import React, { useState } from 'react';
import Day from './Day'
import { Months } from './Months'

const Calendar = ({ date }) => {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    
    const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let curMonth = new Array(6).fill(new Array(7).fill({}))
    for (let week in curMonth) {
        for (let day in curMonth[week]) {
            console.log((parseInt(week) * 7 + parseInt(day)) % Months[date.getMonth()].days +1)
            curMonth[week][day] = <Day day={(parseInt(week) * 7 + parseInt(day)) % Months[date.getMonth()].days +1} /> 
        }
    }
    console.log(curMonth)
    const [weekList, setWeekList] = useState()


    const today = {
        dayInMonth: date.getDate(),
        dayInWeek: date.getDay(),
        monthNumber: date.getMonth()
    }

    return (
        <div>

        </div>
    );
};

export default Calendar;