import React, { useState } from 'react';

const Table = ({ todos, removeTodo, updateTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo} 
          />
        ))}
      </tbody>
    </table>
  );
};

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);  // Контролює режим редагування
  const [editValue, setEditValue] = useState(todo.title); // Тримати поточне значення

  const handleEdit = () => {
    setIsEditing(true); // Включити режим редагування
  };

  const handleSave = () => {
    if (editValue.trim() !== '') {
      updateTodo(todo.id, editValue); // Оновити завдання
      setIsEditing(false); // Вимкнути режим редагування після збереження
    }
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
        ) : (
          todo.title
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button> // Кнопка збереження
        ) : (
          <button onClick={handleEdit}>Edit</button> // Кнопка редагування
        )}
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default Table;
