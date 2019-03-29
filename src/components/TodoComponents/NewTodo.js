import React, { useState } from 'react';

import '../../styles/NewTodo.css'

const NewTodo = ({ addTodo }) => {
    let [userInput,changeUserInput] = useState("");
    let handleSubmit
    return (
        <form className='todo-new' onSubmit={(e) => [e.preventDefault(),addTodo(userInput)]}>
            <input type='text' value={userInput} onChange={(e)=>changeUserInput(e.target.value)}/>
        </form>
    );
};

export default NewTodo;