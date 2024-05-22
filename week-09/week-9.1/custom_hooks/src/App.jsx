import { useState,useEffect } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(res) {
        setTodos(res.data.todos)
        setLoading(false)
      })
    }, n*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(res) {
      setTodos(res.data.todos)
      setLoading(false)
    })

    return () => {
      clearInterval(intervalId)
    };
  }, [n])

  return {todos, loading};
}

function App() {
  const {todos, loading} = useTodos(5);

  return (
    <>
      {loading ? <div>loading...</div> : todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({todo}) {
  return <div>
    {todo.title} <br></br>
    {todo.description}
  </div>
}

export default App
