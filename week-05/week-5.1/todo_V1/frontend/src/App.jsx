import { useState } from 'react'
import {CreateTodo} from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")    // wrong way to use fetch, better way - useEffect
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.allTodos);
    })

  return (
    <div> 
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
