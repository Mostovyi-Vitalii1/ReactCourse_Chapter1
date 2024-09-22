const Search = ({ search, setSearch }) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
    </div>
  )
}

export default Search;
