import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel.js';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        // prevents adding an empty list item
        if (todoTitle === "") {
            return false;
        }
        console.log(todoTitle);
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
                Title:
            </InputWithLabel>
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddTodoForm;