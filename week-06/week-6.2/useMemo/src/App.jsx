import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   let [counter, setCounter] = useState(0);
//   let [inputVal, setInputVal] = useState(1);

//     let sum = 0;
//     for(let i=1; i<=inputVal; i++) {
//       sum = sum + i;
//     }

//   return <div>
//     <input onChange={function(e) {
//       setInputVal(e.target.value);
//     }}
//     placeholder='Enter number from 1 - 100'></input>
//     <p>Sum from 1 to {inputVal} is {sum}</p>
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>counter: {counter}</button>
//   </div>
// }

// problem of above approach is that clicking on counter button whole thing is getting re rendered 
// and the for loop runs again even though the value is same in previous and this  render 
// you can use useEffect (define [ans, setAns] useState and wrap the for loop in useEffect )
// but there is one problem 
//  - the inputVal is changing  so a rerender happens
//  - again ans is changing so another rerender



// better approach is to use - useMemo 
// 

function App() {
  let [counter, setCounter] = useState(0);
  let [inputVal, setInputVal] = useState(1);

  let answer = useMemo(() => {
    console.log('memo called')
    let sum = 0;
    for(let i=1; i<=inputVal; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputVal])          // in this case if inputVal changes it rerendes otherwise not 
  // but in case of useEffect it would have rerenders
   

  return <div>
    <input onChange={function(e) {
      setInputVal(e.target.value);
    }}
    placeholder='Enter number from 1 - 100'></input>
    <p>Sum from 1 to {inputVal} is {answer}</p>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>counter: {counter}</button>
  </div>
}


export default App
