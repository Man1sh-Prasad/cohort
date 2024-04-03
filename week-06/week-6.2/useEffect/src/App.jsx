import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
function App() {
  let [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(response) {
      const json = await response.json();
      setTodos(json.todos)
    })
  },[count])

  function handleClick() {
    setCount(count++)
  }

  return (
     <>
       <Todos todos={todos}></Todos>
       <button onClick={handleClick}>add todo</button>
     </>   
  )
}

function Todos({todos}) {
  return   <div>
     {todos.map( (todo) => (
       <div key={todo.id}>
         <h3>{todo.title}</h3>
         <p>{todo.description}</p>
         <p>{todo.completed.toString()}</p>
       </div>
     ))}
 </div>
 }
 
*/
//------------------------------------------------

/*
Write a component that takes todo id as an input and fetches the data for the todo from the given endpoints and renders it 
 */

function App() {
  return <div>
    <Todo id={2}></Todo>
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async function(response) {
      const json = await response.json()
      setTodo(json.todo)
    })
  }, [id]) // you can remove it will work the same but if you use some other variable it might not 


  return <div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
  </div>
}


export default App
