import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';
import Loader from './Loader'; // Імпорт нового компонента Loader
import useFetch from './useFetch';
import useLoading from './useLoading';

const ToDoContainer = () => {
  const { data: fetchedTodos, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const isLoading = useLoading(loading);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (fetchedTodos) {
      setTodos(fetchedTodos);
    }
  }, [fetchedTodos]);

  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    const newTodoItem = { title: newTodo, completed: false };
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoItem),
    });

    if (response.ok) {
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
      setNewTodo('');
    } else {
      console.error('Failed to add todo');
    }
  };

  const removeTodo = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } else {
      console.error('Failed to delete todo');
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Loader loading={isLoading}>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Table todos={filteredTodos} removeTodo={removeTodo} />
    </Loader>
  );
};

export default ToDoContainer;
