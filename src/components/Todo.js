import '../styles/Todo.css'
export function Todo({title, description, color, index, onDelete}){
    
    const removeTodo = () => {
        onDelete(index)
    }

    return (<div id="todo-container" style={{backgroundColor: color}}>
        <div id="todo-text-container">
            <p id="title">{title}</p>
            <p id="description">{description}</p>
        </div>
        <button onClick={removeTodo}>Delete</button>
    </div>)
}
