import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo}) => {

    return (
        <div className="Todo">
            <p>{task.label}</p>
            <div>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.label)} />
            </div>
        </div>
    )

    

}