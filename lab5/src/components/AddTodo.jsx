import React from 'react';

const AddTodo = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          padding: '10px 15px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '100%',
          maxWidth: '300px',
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
