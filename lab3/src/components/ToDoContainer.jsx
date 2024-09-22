import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';

const ToDoContainer = ({ todos, setTodos }) => {
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
    <div>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Table todos={filteredTodos} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDoContainer;
