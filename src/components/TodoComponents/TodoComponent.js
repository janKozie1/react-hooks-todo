import React, { useState } from 'react';
import TodoItem from './TodoItem'
import TodoHeader from './TodoHeader'

import '../../styles/TodoComponent.css'

const TodoComponent = ({style}) => {
    console.log(style)
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
            text: 'Check out the new album',
            completed: false,
        },
        {
            text: 'Do homework',
            completed: false,
        },
        {
            text: 'Make groceries',
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
        <div className='todo-component' style={{opacity:style.opacity,transform:`translateX(${style.x}px)`,zIndex:style.z}} >
            <TodoHeader />
            <div className='todo-body'>
                
                {
                    todoList.map(({ text, completed }, index) => {
                        return <TodoItem text={text} status={completed} key={index} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                    })
                }
            </div>

        </div>
    );
};

export default TodoComponent;