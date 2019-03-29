import React, { useState } from 'react';
import TodoItem from './TodoItem'
import TodoHeader from './TodoHeader'
import NewTodo from './NewTodo'
import fire from '../fire'

import '../../styles/TodoComponent.css'

const TodoComponent = ({ selectedDay }) => {
    const [todoList, setTodoList] = useState([
        {
            text: 'Love Janeth',
            completed: false,
            day: 25,
            month: 2,
        },
        {
            text: 'Always and forever',
            completed: false,
            day: 22,
            month: 2,
        },
        {
            text: 'Do something',
            completed: false,
            day: 25,
            month: 2,
        },
        {
            text: 'Make her appreciated',
            completed: false,
            day: 23,
            month: 2,
        },
        {
            text: 'Always always',
            completed: false,
            day: 25,
            month: 2,
        },
        {
            text: 'Do homework',
            completed: false,
            day: 26,
            month: 2,
        },

    ]);
    // let messagesRef = fire.database().ref('todos').orderByChild('day').equalTo(selectedDay.day).limitToLast(100);
    // messagesRef.on('child_added', snapshot => {
    //     /* Update React state when message is added at Firebase Database */
    //     let message = { text: snapshot.val(), id: snapshot.key };
    //     console.log(message)
    // })

    const deleteTodo = (index) => {
        setTodoList(todoList.filter((e, i) => i !== index))
    }
    const completeTodo = (index) => {
        setTodoList(todoList.map((e, i) => { return i === index ? { ...e, completed: !e.completed } : e }))
    }
    const addTodo = (e) => {

        return selectedDay.day && selectedDay.month ? setTodoList([...todoList, { text: e, completed: false, day: selectedDay.day, month: selectedDay.month }]) : null
    }

    return (
        <div className='todo-component'>
            <TodoHeader />
            <div className='todo-body'>
                <NewTodo addTodo={addTodo} />
                {
                    todoList.filter((e => e.day === selectedDay.day && e.month === selectedDay.month)).map(({ text, completed }, index) => {
                        return <TodoItem text={text} status={completed} key={index} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                    })
                }
            </div>

        </div>
    );
};

export default TodoComponent;