import { useState } from 'react'  
import './App.css'

let counter = 4;

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "at 5 pm"
    },
    {
      id: 2,
      title: "eat food",
      description: "at 8 pm"
    },
    {
      id: 3,
      title: "play game",
      description: "at 9 pm"
    } 
  ])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      {todos.map( todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}

      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

function Todo({title, description}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ) 
   
  }

export default App
