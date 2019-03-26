import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

import DaysNames from './DaysNames'
import Month from './Month'

import '../../styles/Calendar.css'

const Calendar = ({ date,setDate, selectedDay, setSelectedDay, direction, setDirection }) => {
    console.log(date)
    let [offset, setOffset] = useState(2)
    let previousMonth = date.month - 1 < 0 ? { year: date.year - 1, month: 11, day: null } : { year: date.year, month: date.month - 1, day: null };
    let nextMonth = date.month + 1 > 11 ? { year: date.year + 1, month: 0, day: null } : { year: date.year, month: date.month + 1, day: null };

    let selectDay = ({ day, month }) => {
        if (!isNaN(parseInt(selectedDay.day)) || day !== selectedDay.day || month !== selectedDay.month) {
            setSelectedDay({ day, month })
        } else if (selectedDay.day === day && selectedDay.month === month) {
            setSelectedDay({ day: null, month: null })
        }
    }
    let positions = {
        first: {
            from: -100,
            to: direction === 'forward' ? 0 : -100
        },
        middle: {
            from: 0,
            to: direction === 'forward' ? 100 : direction === 'back' ? -100 : 0
        },
        last: {
            from: 100,
            to: direction === 'back' ? 0 : 100
        }
    }
    let style = [
        useSpring({
            to: { transform: `translateX(${positions.first.to}%)` }, from: { transform: `translateX(${positions.first.from}%)` }, config: config.slow, onRest: () => direction === 'forward' ? ()=>{
                setDate({ ...nextMonth });
                setDirection(null);
                return;
            } : null}),
        useSpring({ to: { transform: `translateX(${positions.middle.to})` }, from: { transform: `translateX(${positions.middle.from}%)` }, config: config.slow }), //right
        useSpring({ to: { transform: `translateX(${positions.last.to}%)` }, from: { transform: `translateX(${positions.last.from}%)` }, config: config.slow, onRest: () => direction === 'forward' ?()=>{
            setDate({ ...previousMonth }) 
            setDirection(null);
            return;
        } : null })
    ]



    console.log(direction)
    return (
        <div className='calendar'>
            <DaysNames offset={offset} setOffset={setOffset} />
            <div className='calendar-days-container'>
                <Month offset={offset} style={style[0]} date={previousMonth} type={'previous'} selectedDay={selectedDay} selectDay={selectDay} />
                <Month offset={offset} style={style[1]} date={date} type={'current'} selectedDay={selectedDay} selectDay={selectDay} />
                <Month offset={offset} style={style[2]} date={nextMonth} type={'next'} selectedDay={selectedDay} selectDay={selectDay} />
            </div>
        </div>
    );
};

export default Calendar;