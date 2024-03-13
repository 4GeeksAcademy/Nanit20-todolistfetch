import React , {useState} from "react";
import TodoList from './todoList';
import {v4 as uuidv4} from "uuid";
import { Todo } from "./todo";
uuidv4();

export const TodoExtend = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo}])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="TodoExtend">
            <h1>todos</h1>
            <TodoList addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} deleteTodo={deleteTodo}/>
            ))}
            
        </div>
    )
}