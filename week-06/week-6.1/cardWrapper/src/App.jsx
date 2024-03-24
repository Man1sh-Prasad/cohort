import { useState } from 'react'
import './App.css'

// ------------------------------------------------------------------
// function App() {
//   return <div>
//     <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
//     <CardWrapper innerComponent={<TextComponent2/>}></CardWrapper>
//   </div>
  
// }


// function CardWrapper({innerComponent}) {
//   // create a div which has a border  
//   // inside the div render the prop

//   return (
//     <div style={{border: "2px solid black",
//                 padding: 20}}>
//       {innerComponent}
//     </div>
//   )
// }

// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

// function TextComponent2() {
//   return <div>
//     hi there again
//   </div>
// }


// cleaner syntax  ---------------------------------------------------------

function App() {
  return <div>
    <CardWrapper>
      heloo there
      <Hello></Hello>
    </CardWrapper>
  </div>
}
function Hello() {
  return <div>
    Hello there again
  </div>
}
function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: "20px"}}>
    {children}
  </div>
}

export default App
