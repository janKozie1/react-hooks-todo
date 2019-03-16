
import React from 'react';

export default function TodoItem({ text, index, deleteTodo, completeTodo, status }) {
    console.log(status)
    return (<div>
        <p style={{ textDecoration: status ? 'line-through' : '' }}>{text}</p>
        <button onClick={() => deleteTodo(index)}>x</button>
        <button onClick={() => completeTodo(index)}>v</button>
    </div>)
}