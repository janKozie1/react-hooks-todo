
import React from 'react';
import TodoButton from './TodoButton'

import '../../styles/TodoItem.css'

export default function TodoItem({ text, index, deleteTodo, completeTodo, status }) {
    return (
        <div className='todo-item'>
            <p className='todo-item-text' style={{ textDecoration: status ? 'line-through' : '' }}>{text}</p>
            <TodoButton text={'v'} onClick={completeTodo} index={index} />
            <TodoButton text={'x'} onClick={deleteTodo} index={index} />
        </div>
    )
}