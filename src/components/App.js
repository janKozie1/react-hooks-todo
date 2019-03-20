import React from 'react';
import Calendar from './CalendarComponents/Calendar';
import ToDoList from './TodoComponents/TodoList'
import '../styles/App.css'

export default function App() {
    
    return (
        <div className='app'>
            {/* <TodoList /> */}
            <Calendar date={new Date()} />
        </div>
    )
}