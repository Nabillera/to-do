import './Todo.css'
export function Todo(props){

    return (<div id="todo-container">
        <p id="title">{props.title}</p>
        <p id="description">{props.description}</p>
        <button>Delete</button>
    </div>)
}
