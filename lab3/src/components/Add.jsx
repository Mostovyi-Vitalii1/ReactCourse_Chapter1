const Add = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          padding: '10px 15px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '100%',
          maxWidth: '300px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          transition: 'border 0.3s ease, box-shadow 0.3s ease',
        }}
        onFocus={(e) => {
          e.target.style.border = '1px solid #4CAF50';
          e.target.style.boxShadow = '0 2px 5px rgba(0, 200, 100, 0.2)';
        }}
        onBlur={(e) => {
          e.target.style.border = '1px solid #ccc';
          e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }}
      />
      <button
        onClick={addTodo}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#45a049';
          e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4CAF50';
          e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Add
