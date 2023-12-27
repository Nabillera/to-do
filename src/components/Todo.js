import { useEffect } from 'react'
import '../styles/Todo.css'
export function Todo(props){

    // const colors = ["#CCCCFF", "#9EA9ED", "#7575CF"]
    // const box = document.getElementById("todo-container")
    // const setColor = () => {
    //     box.style.backgroundColor = colors[props.key%3]
    // }
    // useEffect(() => {
    //     setColor()   
    // })
    
    return (<div id="todo-container">
        <div id="todo-text-container">
            <p id="title">{props.title}</p>
            <p id="description">{props.description}</p>
        </div>
        <button>Delete</button>
    </div>)
}
