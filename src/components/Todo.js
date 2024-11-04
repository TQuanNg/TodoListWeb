import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, toggleEditMode, moveTaskUp, moveTaskDown, index}) => {
    return(
        <div className='Todo'>
             <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': "incompleted"}`}>
                 {task.task}
                </p>
             <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEditMode(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick = {() => deleteTodo(task.id)} />
                <FontAwesomeIcon icon={faUpLong} onClick = {(() => moveTaskUp(index))}/>
                <FontAwesomeIcon icon={faDownLong} onClick = {(() => moveTaskDown(index))}/>
             </div>
        </div>
    )
}