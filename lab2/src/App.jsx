import { useState } from 'react'
import './App.css'
import PageTitle from './components/PageTitle'
import Search from './components/Search'
import Add from './components/Add'
import Table from './components/Table'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'delectus aut autem' },
    { id: 2, title: 'quis ut nam facilis et officia qui' },
  ])
  const [newTodo, setNewTodo] = useState('')
  const [search, setSearch] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
    setTodos([...todos, { id: newId, title: newTodo }])
    setNewTodo('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <PageTitle title="ToDo App." />
      <Search search={search} setSearch={setSearch} />
      <div className="todo-container">
        <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <Table todos={filteredTodos} removeTodo={removeTodo} />
      </div>
    </div>
  )
  
}

export default App
