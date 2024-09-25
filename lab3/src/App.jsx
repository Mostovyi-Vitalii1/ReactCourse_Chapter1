import { useState } from 'react';
import './App.css';
import PageTitle from './components/PageTitle';
import ToDoContainer from './components/ToDoContainer';

const App = () => {
  return (
    <div className="App">
      <PageTitle title="ToDo App." />
      <ToDoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
