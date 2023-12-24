import React, { useState } from 'react'
import './AddTodo.css'
import { Todo } from './Todo';
export function AddTodo(){

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        title: "",
        description: ""
    });

    const trackChange = (event) => {
        const userInput = event.target.value;
        setTodo({
        ...todo,
        [event.target.name]: userInput
      })
    }

    const saveTodo = () => {
        todos.push(todo);
        setTodo({
          ...todo,
          title: "",
          description: ""
        })
      }

    return (<div>
        <div id="add-todo-form">
            <p>Add To-Do</p>
            <input onChange={trackChange} name="title" placeholder="Title"/>
            <textarea onChange={trackChange} name="description" placeholder="Description"/>
            <button onClick={saveTodo} id="save-button">Save</button>
        </div>
        {todos.map((todo) => {
            return(
                <Todo
                title = {todo.title}
                description = {todo.description}
                />
            )
        }) }
    </div>
    )
}
