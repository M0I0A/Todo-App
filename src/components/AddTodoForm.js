import React, { useState } from 'react';
import '../styles/AddTodoForm.css';

function AddTodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        autoComplete="off"
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default AddTodoForm;
