import React from 'react';
import Calendar from './CalendarComponents/Calendar';
import TodoComponent from './TodoComponents/TodoComponent'
import '../styles/App.css'

export default function App() {
    
    return (
        <div className='app'>
            
            <Calendar date={new Date()} />
            <TodoComponent /> 
        </div>
    )
}