import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

// Performance / Timre based 
/** 
function useInterval(fn, timeout) {
  useEffect(() => {
    const id = setInterval(() => {
      fn()
    }, timeout)
  
  return () => {
    clearInterval(id)
  }
  }, [timeout, fn])
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(prevCount => prevCount + 1)
  }, 1000)

  return (
    <>
      <h1>count: {count}</h1>
    </>
  )
}

*/



// ---- useDebounce ------

function useDebounce(value, delay) {
  const [debouncedValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
  
    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return debouncedValue
}

function App() {
  const [input, setInput] = useState('')

  const debouncedValue = useDebounce(input, 500)

  return (
    <div>
      <input type='text' 
      value={input} 
      onChange={(e) => {setInput(e.target.value)}} 
      placeholder='Search...'
      /> 
    </div>
  )
}

export default App
