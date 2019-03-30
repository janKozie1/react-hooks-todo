import React, { useState } from 'react';

import '../../styles/NewTodo.css'

const NewTodo = ({ addTodo,selectedDay }) => {
    let [userInput, changeUserInput] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault()
        if (userInput && selectedDay.day) {
            addTodo(userInput)
            changeUserInput('')
        }
    }
    return (
        <form className='todo-new' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' placeholder='Add a new todo...' className='todo-new-input' value={userInput} onChange={(e) => changeUserInput(e.target.value)} />
        </form>
    );
};

export default NewTodo;