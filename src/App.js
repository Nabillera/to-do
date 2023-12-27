import React, { useState } from 'react'
import { AddTodo } from './components/AddTodo';
import './App.css';
import { Todo } from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  const saveData = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <AddTodo onSave={saveData}/>
      <div id="todos-container">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;