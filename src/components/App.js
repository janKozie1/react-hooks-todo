import React from 'react';
import TodoList from './TodoList';
import Calendar from './Calendar'

export default function App() {
    
    return (
        <div>
            <TodoList />
            <Calendar date={new Date()} />
        </div>
    )
}

