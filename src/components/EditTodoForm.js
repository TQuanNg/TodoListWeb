import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task) // actual value before edit to show up when click button

    useEffect(() => {
        setValue(task.task);
    }, [task]);

    const handleSubmit = e => {
        e.preventDefault(); // prevent loading default
        console.log(`Attempting to ${task.id}`)
        editTodo(value, task.id)

        setValue("") // clear value when enters
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