import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ todos, completeTodo, removeTodo, updateTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
