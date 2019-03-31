import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

import Calendar from './CalendarComponents/Calendar';
import TodoComponent from './TodoComponents/TodoComponent'
import MonthSelection from './MonthSelection'

import '../styles/App.css'


export default function App() {
    let [date, setDate] = useState(_ => {
        let temp = new Date();
        return { day: temp.getDate(), month: temp.getMonth(), year: temp.getFullYear() }
    })
    let [daysWithTasks, setDaysWithTasks] = useState([])
    let [direction, setDirection] = useState(null)
    let [selectedDay, setSelectedDay] = useState({ day: null, month: null, year: null })
    let style = useSpring({ opacity: 1, transform: `translateX(0px)`, from: { opacity: 0, transform: `translate(-500px)` }, config: config.slow });
    return (
        <animated.div style={style} className='app'>
            <MonthSelection month={date.month} setDirection={setDirection} direction={direction} />
            <div className='container'>
                <Calendar date={date} setDate={setDate} selectedDay={selectedDay} setSelectedDay={setSelectedDay} direction={direction} setDirection={setDirection} daysWithTasks={daysWithTasks} />
                <TodoComponent selectedDay={selectedDay} setDaysWithTasks={setDaysWithTasks} />
            </div>
        </animated.div>
    )
}