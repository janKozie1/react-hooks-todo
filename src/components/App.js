import React from 'react';
import TodoList from './TodoList';
import Calendar from './Calendar'
import '../styles/App.css'

export default function App() {
    
    return (
        <div className='app'>
            {/* <TodoList /> */}
            <Calendar date={new Date()} />
        </div>
    )
}