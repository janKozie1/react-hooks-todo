import React, { useState } from 'react';

import Calendar from './CalendarComponents/Calendar';
import TodoComponent from './TodoComponents/TodoComponent'
import MonthSelection from './MonthSelection'
import '../styles/App.css'
import { useSpring, animated, interpolate ,config} from 'react-spring'

export default function App() {
    let [date, setDate] = useState(_ => {
        let temp = new Date(2019, 8, 2);
        return { day: temp.getDate(), month: temp.getMonth(), year: temp.getFullYear() }
    })
    let [selectedDay, setSelectedDay] = useState({ day: null, month: null })
    let style = useSpring({ opacity: 1, transform:`translateX(0px)`, from: { opacity: 0,transform:`translate(-500px)` },config:config.slow });
    return (
        <animated.div style={style} className='app'>
            <MonthSelection month={date.month} setDate={setDate} date={date} />
            <div className='container'>

                <Calendar date={date} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                <TodoComponent date={date} />
            </div>

        </animated.div>
    )
}