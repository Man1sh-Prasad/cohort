import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  )
}

function Count({count}) {
  return <div>
    {count}
  </div>
}

function  Button({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increment</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrement</button>
  </div>
}

export default App
