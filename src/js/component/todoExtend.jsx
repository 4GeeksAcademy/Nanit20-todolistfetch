import React, { useState, useEffect } from "react";
import TodoList from './todoList';
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./todo";
uuidv4();

export const TodoExtend = () => {

    const getList = () => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/Nanit20")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    };

    useEffect(() => {
        getList()
    }, []);

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        const arrayAdd = [...todos, { done:false, label: todo }]
        setTodos(arrayAdd)
        refresPost(arrayAdd)
    }

    const deleteTodo = label => {
        const arrayDelete = todos.filter(todo => todo.label !== label)
        setTodos(arrayDelete)
        refresPost(arrayDelete)
    }

    const refresPost = (dataBody) => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/Nanit20", {
            method: "PUT",
            body: JSON.stringify(dataBody),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };


    return (
        <div className="TodoExtend">
            <h1>todos</h1>
            <TodoList addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} deleteTodo={deleteTodo} />
            ))}

        </div>
    )
}