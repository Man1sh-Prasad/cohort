import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './strore/atoms/count'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      
    </div>
  )
}

function Count() {
  // console.log('count re render')
  return <div>
    {/* <RecoilRoot> */}
      <CountRenderer />
      <Buttons />
      {/* <IsEven /> */}
    {/* </RecoilRoot> */}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom )  // using useRecoilValue instead of useRecoilState because we need only count to render and not any updates in counts

  return <div>
    <b>{count}</b>
    <EvenCountRenderer /> 
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log('button re render')

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase Count</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease Count</button>

  </div>
}

function EvenCountRenderer() {
  console.log('even rerender')
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
  
}

// function IsEven() {
//   console.log('even re render')

//   const count = useRecoilValue(countAtom);
//   if(count % 2 == 0) {
//     return <div>
//       It is Even
//     </div>
//   }
// }

export default App
