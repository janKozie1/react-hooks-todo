
import React from 'react';
import TodoButton from './TodoButton'

import '../../styles/TodoItem.css'

export default function TodoItem({ text, index, deleteTodo, completeTodo, status }) {
    return (
        <div className='todo-item'>
            <input className='todo-item-text' value ={text} style={{ textDecoration: status ? 'line-through' : '' }}/>
            <TodoButton text={'v'} onClick={completeTodo} index={index} />
            <TodoButton text={'x'} onClick={deleteTodo} index={index} />
        </div>
    )
}