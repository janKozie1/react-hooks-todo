import React from 'react';
import '../../styles/TodoButton.css'
const TodoButton = ({ text,onClick,index }) => {
    return (
        <div className={`todo-button ${text === 'v' ? 'confirm' : 'delete'}` } onClick={() => onClick(index)}>

        </div>
    );
};

export default TodoButton;