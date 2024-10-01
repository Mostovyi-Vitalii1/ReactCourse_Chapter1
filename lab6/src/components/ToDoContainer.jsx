import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';
import useFetch from './useFetch';
import useLoading from './useLoading'; 

const ToDoContainer = () => {
  const { data: fetchedTodos, error, loading, setData:setTodos } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const isLoading = useLoading(loading);

  const [newTodo, setNewTodo] = useState(''); 
  const [search, setSearch] = useState('');  




  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = fetchedTodos.length > 0 ? fetchedTodos[fetchedTodos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, title: newTodo };
    setTodos([...fetchedTodos, newTodoItem]);
    setNewTodo(''); 
  };

  const removeTodo = (id) => {
    const updatedTodos = fetchedTodos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTitle) => {
    const updatedTodos = fetchedTodos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = fetchedTodos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Table todos={filteredTodos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default ToDoContainer;
