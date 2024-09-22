const Table = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <p style={{ margin: 0 }}>{todo.title}</p>
          <button
            onClick={() => removeTodo(todo.id)}
            style={{
              padding: '6px 10px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              backgroundColor: '#ff4d4d',
              border: 'none',
              color: '#fff',
              borderRadius: '5px',
              marginTop: '10px'
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Table
