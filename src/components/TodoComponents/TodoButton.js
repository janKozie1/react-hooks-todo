import React from 'react';
import '../../styles/TodoButton.css'
const TodoButton = ({text}) => {
    return (
        <div className='todo-button'>
           {
               text==='v'?
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48"><path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"/></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg>
            }
           
        </div>
    );
};

export default TodoButton;