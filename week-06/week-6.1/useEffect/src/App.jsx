import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(response){
        const json = await response.json();
        setTodos(json.todos)
      })
    }, 10000)
    
  }, [])

  // function handleClick(){
  //   setCounter(counter++)
  // }

  return (
    <>
      <Todos todos={todos}></Todos>
      {/* <button onClick={handleClick}>Add New Todo</button> */}
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

export default App
