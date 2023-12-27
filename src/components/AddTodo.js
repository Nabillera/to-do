import React, { useState } from "react";
import "../styles/AddTodo.css";

export const AddTodo = ({ onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const trackChange = (event) => {
        const userInput = event.target.value;
        if (event.target.name === "title") {
            setTitle(userInput);
        } else {
            setDescription(userInput);
        }
    };

    const saveData = () => {
        onSave({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <div id="add-todo-form">
            <p>Add To-Do</p>
            <input onChange={trackChange} name="title" placeholder="Title" />
            <textarea
                onChange={trackChange}
                name="description"
                placeholder="Description"
            />
            <button onClick={saveData} id="save-button">
                Save
            </button>
        </div>
    );
};