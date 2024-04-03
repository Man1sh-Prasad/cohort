import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todoNumber, setTodoNumber] = useState(1);

  function handleClick(todoNumber) {
    setTodoNumber(todoNumber)
    // console.log(todoNumber)
  }

  return <div>
    <button onClick={() => handleClick(1)} style={myStyle}>1</button>
    <button onClick={() => handleClick(2)} style={myStyle}>2</button>
    <button onClick={() => handleClick(3)} style={myStyle}>3</button>
    <button onClick={() => handleClick(4)} style={myStyle} >4</button>
    <Todo id={todoNumber}></Todo>
  </div>


// error i was getting here 
/**
 * The "Too many re-renders" error in your code is likely due to the way you're calling the handleClick function within the onClick event handlers. You're calling the function directly instead of passing a reference to it. This causes the function to be executed immediately on render, which leads to the infinite re-render loop.
To fix this, you need to pass a function reference to the onClick event handlers. You can do this by wrapping the handleClick calls in arrow functions
 */

}


function Todo({id}) {
  const [todo, setTodo] = useState({});
  // console.log(id);

  useEffect( () => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async function(response) {
      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }
      const json = await response.json();
      setTodo(json.todo)
    })
    .catch(error => {
      console.log('error fetching data', error)
    })  
  }, [id])

  return <div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
  </div>
}


const myStyle = {
  marginRight: '5px',
  border: '1px solid',
};

export default App
