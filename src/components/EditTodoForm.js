import React, { useState, useEffect } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    useEffect(() => {
        setValue(task.task);
    }, [task]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Attempting to ${task.id}`);
        editTodo(value, task.id);

        setValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='TodoForm'
                placeholder='Update Task'
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <button type='submit' className='todo-btn'>
                Update Task
            </button>

        </form>
    )
}