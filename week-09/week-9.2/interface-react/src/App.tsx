import { useState } from 'react'
import './App.css'

interface TodoProp {
  title: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [todos, setTodos] = useState<TodoProp[]>([]);

  const handleClick =  () => {
    setTodos([...todos, {title, description, isDone}])
    setTitle("")
    setDescription("")
  }

  return (
    <>
      <input type='text' placeholder='enter title' value={title} 
      onChange={(e) => {setTitle(e.target.value)}} />
      <input type='text' placeholder='enter description' value={description} 
      onChange={(e) => {setDescription(e.target.value)}} />
      <button onClick={handleClick}>Add Todo</button>
 
      <Todo props={todos} />
    </>
  )
}

interface TodoProps {
  props: TodoProp[]
}

function Todo({props}: TodoProps) {
  return (
    <>
      {props.map((prop, index: number) => (
        <div key={index}>
          <div>{prop.title}</div>
          <div>{prop.description}</div>
          <div>{prop.isDone ? "Done" : "Not Done"}</div>
        </div>
      ))}
    </>
  )
}

export default App
