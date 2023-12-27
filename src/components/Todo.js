import '../styles/Todo.css'
export function Todo(props){
    
    return (<div id="todo-container" style={{backgroundColor: props.color}}>
        <div id="todo-text-container">
            <p id="title">{props.title}</p>
            <p id="description">{props.description}</p>
        </div>
        <button>Delete</button>
    </div>)
}
