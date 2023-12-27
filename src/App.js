    import React, { useState } from "react";
    import { AddTodo } from "./components/AddTodo";
    import "./App.css";
    import { Todo } from "./components/Todo";

    function App() {
    const [todos, setTodos] = useState([]);
    const colors = ["#CCCCFF", "#9EA9ED", "#7575CF"];
    const [colorIndex, setColorIndex] = useState(0);

    const saveData = (todo) => {
        const newTodo = { ...todo, color: colors[colorIndex] };
        setTodos([...todos, newTodo]);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <div className="App">
        <AddTodo onSave={saveData} />
        <div id="todos-container">
        {todos.map((todo, index) => (
            <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            color={todo.color}
            />
        ))}
        </div>
        </div>
    );
    }

    export default App;