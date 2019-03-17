import React, { useState } from 'react';
import Day from './Day'
import { Months } from './Months'

const Calendar = ({ date }) => {
    const [weekList, setWeekList] = useState(new Array(6).fill(new Array(7)).fill(<Day />))
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log(first, last)
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