
import React from 'react';
import TodoButton from './TodoButton'

import '../../styles/TodoItem.css'

export default function TodoItem({ text, index, deleteTodo, completeTodo, status }) {
    console.log(index)
    let handleChange = () =>{

    }
    return (
        <form className='todo-item'>
            <input className='todo-item-text' value ={text} type='text' onChange={(e)=>handleChange(e.target.value)} style={{ textDecoration: status ? 'line-through' : '' }}/>
            <TodoButton text={'v'} onClick={completeTodo} index={index} />
            <TodoButton text={'x'} onClick={deleteTodo} index={index} />
        </form>
    )
}