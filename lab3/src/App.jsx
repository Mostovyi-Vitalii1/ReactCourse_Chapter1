import { useState } from 'react';
import './App.css';
import PageTitle from './components/PageTitle';
import ToDoContainer from './components/ToDoContainer';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'delectus aut autem' },
    { id: 2, title: 'quis ut nam facilis et officia qui' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodo }]);
    setNewTodo('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <PageTitle title="ToDo App." />
      <ToDoContainer
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        search={search}
        setSearch={setSearch}
        todos={filteredTodos}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
