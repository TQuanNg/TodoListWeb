import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from "./EditTodoForm";
import { useTheme } from './ThemeProvider';

export const TodoWrapper = ({ day }) => {
    const [todos, setTodos] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(`http://localhost:3001/todos?day=${day}`);
                const data = await response.json();
                setTodos(data.map(todo => ({
                    id: todo.task_id, // Use task_id from the database
                    task: todo.title,
                    completed: todo.is_completed,
                    isEditing: false
                })));
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, [day]);

    const addTodo = async (todo) => {
        /*setTodos([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        },])*/

        try {
            const response = await fetch('http://localhost:3001/add-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: todo, day: day }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newTodo = await response.json();
            setTodos([...todos, {
                id: newTodo.task_id, // Use task_id from the database
                task: newTodo.title,
                completed: newTodo.is_completed,
                isEditing: false
            }]);

        } catch (error) {
            console.error('Error adding todo: ', error);
        }
    }

    const toggleComplete = id => { // should change color to green and move to bottom
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const toggleEditMode = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTodo = async (task, id) => {
        try {
            const response = await fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: task }),
            });

            console.log(`In edit`);

            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            ));

        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    useEffect(() => {
        console.log('Todos have been updated:', todos);
    }, [todos]);

    const moveTaskUp = index => {
        if (index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index - 1], updatedTodos[index]] = [updatedTodos[index], updatedTodos[index - 1]];
            setTodos(updatedTodos);
        }
    }

    const moveTaskDown = index => {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            [updatedTodos[index + 1], updatedTodos[index]] = [updatedTodos[index], updatedTodos[index + 1]];
            setTodos(updatedTodos);
        }
    }

    return (
        <div className='TodoWrapper' data-theme={theme}>
            <h1> Get things done</h1>
            <div>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => {

                    console.log(`Print todo ${JSON.stringify(todo)} and index ${index}`);

                    return (
                        todo.isEditing ? (
                            <EditTodoForm editTodo={editTodo} task={todo} />
                        ) : (
                            <Todo task={todo} index={index}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                toggleEditMode={toggleEditMode}
                                moveTaskUp={moveTaskUp}
                                moveTaskDown={moveTaskDown} />
                        )

                    )
                })}
            </div>
        </div>
    )
}