import React from 'react';
import Add from './Add';
import Search from './Search';
import Table from './Table';

const ToDoContainer = ({ newTodo, setNewTodo, addTodo, search, setSearch, todos, removeTodo }) => {
  return (
    <div>
      <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Table todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDoContainer;
