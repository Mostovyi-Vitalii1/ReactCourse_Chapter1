import { useState } from 'react';
import './App.css';
import PageTitle from './components/PageTitle';
import ToDoContainer from './components/ToDoContainer';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'delectus aut autem' },
    { id: 2, title: 'quis ut nam facilis et officia qui' },
  ]);

  return (
    <div className="App">
      <PageTitle title="ToDo App." />
      <ToDoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
