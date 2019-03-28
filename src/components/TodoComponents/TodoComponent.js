import React, { useState } from 'react';
import TodoItem from './TodoItem'
import TodoHeader from './TodoHeader'

import '../../styles/TodoComponent.css'

const TodoComponent = ({selectedDay}) => {

    const [newTodo, updateNewTodo] = useState('')
    const [todoList, setTodoList] = useState([
        {
            text: 'Do homework',
            completed: false,
            date:{
                day:25,
                month:2,
            }
        },
        {
            text: 'Make groceries',
            completed: false,
            date:{
                day:25,
                month:2,
            }
        },
        {
            text: 'Check out the new album',
            completed: false,
            date:{
                day:21,
                month:2,
            }
        },
        {
            text: 'Do homework',
            completed: false,
            date:{
                day:23,
                month:2,
            }
        },
        {
            text: 'Make groceries',
            completed: false,
            date:{
                day:24,
                month:2,
            }
        },
        {
            text: 'Check out the new album',
            completed: false,
            date:{
                day:25,
                month:2,
            }
        }
        
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
        <div className='todo-component'>
            <TodoHeader />
            <div className='todo-body'>
                
                {
                    todoList.filter((e => e.date.day==selectedDay.day && e.date.month == selectedDay.month)).map(({ text, completed }, index) => {
                        return <TodoItem text={text} status={completed} key={index} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                    })
                }
            </div>

        </div>
    );
};

export default TodoComponent;