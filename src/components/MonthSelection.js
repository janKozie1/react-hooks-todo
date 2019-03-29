import React, { useState, useEffect } from 'react';
import { useSpring, config,animated } from 'react-spring';

import { Months } from '../data/Months';
import '../styles/MonthSelection.css'
const MonthSelection = ({ month, setDirection, direction }) => {
    console.log(direction)
    let positions = {
        first: {
            from: -100,
            to: direction === 'back' ? 0 : -100
        },
        middle: {
            from: 0,
            to: direction === 'back' ? 100 : direction === 'forward' ? -100 : 0
        },
        last: {
            from: 100,
            to: direction === 'forward' ? 0 : 100
        }
    }
    let style = [
        useSpring({ to: { transform: `translateX(${positions.first.to}%)` }, from: { transform: `translateX(${positions.first.from}%)` }, config: { mass: 0.5, tension: 50, friction: 10 } }),
        useSpring({ to: { transform: `translateX(${positions.middle.to})` }, from: { transform: `translateX(${positions.middle.from}%)` }, config: { mass: 0.5, tension: 50, friction: 10 } }), //right
        useSpring({ to: { transform: `translateX(${positions.last.to}%)` }, from: { transform: `translateX(${positions.last.from}%)` }, config: { mass: 0.5, tension: 50, friction: 10 } })
    ]
    return (
        <div className='month-selection'>
            <div onClick={() => {
                setDirection('back')
            }} className='month-selection-button left'></div>
            <div className='month-selection-months'>
                <animated.p className='month-selection-month-name previous' style={direction ? style[0] : {}}>{Months[month - 1 < 0 ? 11 : month - 1].name}</animated.p>
                <animated.p className='month-selection-month-name' style={direction ? style[1] : {}}>{Months[month].name}</animated.p>
                <animated.p className='month-selection-month-name next' style={direction ? style[2] : {}}>{Months[month + 1 > 11 ? 0 : month + 1].name}</animated.p>
            </div>
            <div onClick={() => {
                setDirection('forward')
            }} className='month-selection-button right'></div>
        </div >
    );
};

export default MonthSelection;