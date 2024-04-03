import { useCallback } from "react";
import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log('hi there')
  }, [])

  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={() => {
      setCount(count + 1);
    }}>click me: {count}</button> 
  </div>
}

const ButtonComponent = memo((inputFunction) => {
  console.log('child render')

  return <div>
    <button>CLick</button>
  </div>
})

export default App;