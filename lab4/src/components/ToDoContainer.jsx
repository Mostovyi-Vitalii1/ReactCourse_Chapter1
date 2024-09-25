import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';
import useFetch from './useFetch';
import useLoading from './useLoading';

const ToDoContainer = () => {
  // Використовуємо кастомний хук useFetch для завантаження даних з API
  const { data: fetchedTodos, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  // Хук для управління станом завантаження
  const isLoading = useLoading(loading);

  // Ініціалізація стану з даними з localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');  // Стан для нового туду
  const [search, setSearch] = useState('');  // Стан для пошуку

  // Збереження даних в localStorage після зміни списку todos
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // Синхронізація даних з API і стану localStorage
  useEffect(() => {
    if (fetchedTodos && todos.length === 0) {
      setTodos(fetchedTodos);
    }
  }, [fetchedTodos]);

  // Функція для додавання нової задачі
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, title: newTodo };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');  // Очищаємо інпут після додавання задачі
  };

  // Функція для видалення задачі
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    if (updatedTodos.length === 0) {
      localStorage.removeItem('todos');
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
