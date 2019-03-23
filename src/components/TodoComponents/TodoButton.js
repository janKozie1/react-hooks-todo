import React from 'react';
import '../../styles/TodoButton.css'
const TodoButton = ({ text }) => {
    return (
        <div className={`todo-button ${text === 'v' ? 'confirm' : 'delete'}`}>

        </div>
    );
};

export default TodoButton;