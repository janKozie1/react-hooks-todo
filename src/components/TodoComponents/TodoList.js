import React, { useState } from 'react';
import TodoItem from './TodoItem'
const TodoList = () => {
    const [newTodo, updateNewTodo] = useState('')
    const [todoList, setTodoList] = useState([
        {
            text: 'Do homework',
            completed: false,
        },
        {
            text: 'Make groceries',
            completed: false,
        },
        {
            text: 'Go out with friends',
            completed: false,
        },
        {
            text: 'Check out the new album',
            completed: false,
        },
    ]);
    const deleteTodo = (index) => {
        setTodoList(todoList.filter((e, i) => i !== index))
    }
    const completeTodo = (index) => {
        setTodoList(todoList.map((e, i) => { return i === index ? { ...e, completed: !e.completed } : e }))
    }
    const addTodo = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { text: newTodo }])
    }

    return (
        <div>
            {
                todoList.map(({ text, completed }, index) => {
                    return <TodoItem text={text} status={completed} key={index} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                })
            }
            <form onSubmit={addTodo}>
                <input type='text' value={newTodo} onChange={e => updateNewTodo(e.target.value)} />
            </form>
        </div>
    );
};

export default TodoList;