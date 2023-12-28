    import React, { useState } from "react";
    import { AddTodo } from "./components/AddTodo";
    import "./App.css";
    import { Todo } from "./components/Todo";

    function App() {
    const [todos, setTodos] = useState([]);
    const [todoIndex, setTodoIndex] = useState(0)
    const colors = ["#CCCCFF", "#9EA9ED", "#7575CF"];
    const [colorIndex, setColorIndex] = useState(0);

    const saveData = (todo) => {
        const newTodo = { ...todo, color: colors[colorIndex], index: todoIndex };
        setTodos([...todos, newTodo]);
        setColorIndex((colorIndex + 1) % colors.length);
        setTodoIndex(todoIndex + 1)
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo) => todo.index !== index))
    }

    return (
        <div className="App">
        <AddTodo onSave={saveData} />
        <div id="todos-container">
        {todos.map((todo) => (
            <Todo
            onDelete={deleteTodo}
            title={todo.title}
            description={todo.description}
            color={todo.color}
            index={todo.index}
            />
        ))}
        </div>
        </div>
    );
    }

    export default App;