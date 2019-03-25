import React, { useState } from 'react';

import Calendar from './CalendarComponents/Calendar';
import TodoComponent from './TodoComponents/TodoComponent'
import MonthSelection from './MonthSelection'
import '../styles/App.css'
import { Motion, spring } from 'react-motion';

export default function App() {
    let [date, setDate] = useState(_ => {
        let temp = new Date(2019, 8, 2);
        return { day: temp.getDate(), month: temp.getMonth(), year: temp.getFullYear() }
    })
    let [selectedDay, setSelectedDay] = useState({ day: null, month: null })
    return (
        <div className='app'>
            <MonthSelection month={date.month} setDate={setDate} date={date} />
            <div className='container'>
                <Calendar date={date} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                  <Motion defaultStyle={{x:-200,opacity:0,z:-50}} style={{x:spring(selectedDay.day?0:-200),opacity:spring(selectedDay.day?1:0),z:spring(1)}}>{style => <TodoComponent date={date} style={style}/>}</Motion>
                {/*  */}
                   
            </div>

        </div>
    )
}