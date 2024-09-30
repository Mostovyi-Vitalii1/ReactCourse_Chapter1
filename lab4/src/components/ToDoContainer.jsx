import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';
import useFetch from './useFetch';
import useLoading from './useLoading';

const ToDoContainer = () => {
  // Завантаження даних з JSONPlaceholder API
  const { data: fetchedTodos, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const isLoading = useLoading(loading);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  // Синхронізація даних з API
  useEffect(() => {
    if (fetchedTodos) {
      setTodos(fetchedTodos);
    }
  }, [fetchedTodos]);

  // Функція для додавання нової задачі
  const addTodo = async () => {
    if (newTodo.trim() === '') return;

    // Додати нове завдання (імітуємо додавання через API)
    const newTodoItem = { title: newTodo, completed: false };
    
    // Використовуємо POST-запит (фіктивний, тому тут просто імітуємо додавання)
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

  // Функція для видалення задачі
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

  // Фільтрація задач на основі пошукового запиту
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  // Відображаємо стан завантаження
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Відображаємо повідомлення про помилку, якщо вона виникла
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Table todos={filteredTodos} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDoContainer;
