import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current)
      divRef.current.innerHTML = 2000
    }, 5000);
  }, [])

  return (
    <div>
      hi there your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
