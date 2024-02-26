import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'



function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


Todo.propTypes = {
  title: PropTypes.string.isrequired,
  description: PropTypes.string.isrequired
}


function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym", 
    description: "go to gym at 5pm",
    completed: false
  }, {
    title: "study web dev", 
    description: "study web dev at 12pm",
    completed: true
  },
]);

function addTodos() {
  setTodos([...todos, {
    title: "new todo",
    description: "dessc of new todo"
  }])
}

  return  (
    /*
    <div>
      <Todo title="harkirat" description="go to gym"></Todo>
      <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo>
    </div>
    */
    <div>
      <button onClick={addTodos}>Add Todo</button>

      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
} 

export default App
