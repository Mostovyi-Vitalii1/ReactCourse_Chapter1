import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Search from './Search';
import Table from './Table';
import useFetch from './useFetch';
import useLoading from './useLoading'; // Припускаємо, що цей хук у вас також є

const ToDoContainer = () => {
  const { data: fetchedTodos, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const isLoading = useLoading(loading);

  const [todos, setTodos] = useState([]);  // Стан для туду
  const [newTodo, setNewTodo] = useState('');  // Стан для нового туду
  const [search, setSearch] = useState('');  // Стан для пошуку

  // Синхронізація даних з API
  useEffect(() => {
    if (fetchedTodos) {
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
  };

  // Функція для редагування задачі
  const editTodo = (id, newTitle) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
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
      <Table todos={filteredTodos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default ToDoContainer;
