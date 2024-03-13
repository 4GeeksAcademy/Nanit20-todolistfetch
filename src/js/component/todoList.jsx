import React, { useEffect, useState } from "react";

//create your first component
const TodoList = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {

        e.preventDefault();

        addTodo(value);

        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="InputToDo" value={value} placeholder="¿Qué hay para hacer?" onChange={(e) => setValue(e.target.value)} />
        </form>
    );
};
//<button type="submit" className="ButtonToDo">Añadir</button>
export default TodoList;