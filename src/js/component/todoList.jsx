import React , {useState} from "react";

//create your first component
const TodoList = ({addTodo}) => {
    const[value, setValue] = useState("")

    const handleSubmit = e =>{

        e.preventDefault();

        fetch('examples/example.json')
            .then(response => {
                if (!response.ok) {
                throw new Error(response.statusText);
            }
            // Aquí es donde pones lo que quieres hacer con la respuesta
        })

        .catch(error => {
            console.log('Looks like there was a problem: \n', error);
        });

        

        addTodo(value);

        setValue("");
    }
	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="InputToDo" value={value} placeholder="¿Qué hay para hacer?" onChange={(e) => setValue(e.target.value)}/>
            
        </form>
	);
};
//<button type="submit" className="ButtonToDo">Añadir</button>
export default TodoList;