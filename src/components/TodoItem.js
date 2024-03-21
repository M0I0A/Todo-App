import React, { useState } from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <AddTodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        >
          Delete
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
