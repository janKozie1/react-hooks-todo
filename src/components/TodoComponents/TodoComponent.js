import React, { useState, useEffect } from 'react';

import TodoItem from './TodoItem'
import TodoHeader from './TodoHeader'
import NewTodo from './NewTodo'

import '../../styles/TodoComponent.css'

const TodoComponent = ({ selectedDay, setDaysWithTasks }) => {
    const [todoList, setTodoList] = useState([]);
    const deleteTodo = (index) => {
        setTodoList(todoList.filter((e, i) => i !== index))
    }
    const completeTodo = (index) => {
        setTodoList(todoList.map((e, i) => { return i === index ? { ...e, completed: !e.completed } : e }))
    }
    const addTodo = (e) => {
        return selectedDay.day && selectedDay.month ? setTodoList([...todoList, { text: e, completed: false, day: selectedDay.day, month: selectedDay.month,year :selectedDay.year }]) : null
    }
    useEffect(() => {
        setDaysWithTasks(todoList.map((e) => { return { day: e.day, month: e.month, year: e.year } }))
    }, [todoList])

    return (
        <div className='todo-component'>
            <TodoHeader />
            <div className='todo-body'>
                <NewTodo addTodo={addTodo} selectedDay={selectedDay} />
                {
                    todoList.filter((e => e.day === selectedDay.day && e.month === selectedDay.month)).map((el, index) => {
                        return <TodoItem text={el.text} status={el.completed} key={index} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                    })
                }
            </div>

        </div>
    );
};

export default TodoComponent;