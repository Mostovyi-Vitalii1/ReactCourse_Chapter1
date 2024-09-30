import React, { useState } from 'react';

const Table = ({ todos, removeTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');
  const [error, setError] = useState('');

  const handleEdit = (todo) => {
    setEditMode(todo.id);
    setEditedTodo(todo.title);
    setError(''); // Очищаємо помилку при переході в режим редагування
  };

  const handleSave = (todo) => {
    if (editedTodo.trim() === '') {
      setError('Title is required.'); // Встановлюємо повідомлення про помилку
      return;
    }
    
    // Викликаємо функцію редагування з новим значенням
    editTodo(todo.id, editedTodo);
    
    // Очищення станів після збереження
    setEditMode(null);
    setEditedTodo(''); // Очищуємо текстове поле
    setError(''); // Очищаємо помилку після збереження
  };

  return (
    <table>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              {editMode === todo.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    style={{
                      borderColor: error && editMode === todo.id ? 'red' : 'initial', // Підсвічування червоним
                    }}
                  />
                  {error && editMode === todo.id && (
                    <span style={{ color: 'red', marginLeft: '5px' }}>{error}</span> // Показуємо повідомлення про помилку
                  )}
                </div>
              ) : (
                todo.title
              )}
            </td>
            <td>
              {editMode === todo.id ? (
                <button onClick={() => handleSave(todo)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(todo)}>Edit</button>
              )}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
