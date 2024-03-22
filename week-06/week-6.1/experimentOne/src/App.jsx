import React,{ useState } from 'react'

// function App() {

//   const [title, setTitle] = useState("Manish")

//   function updateTitle() {
//     setTitle(`Name: ${Math.random()}`);
//   }
  
//   return (
//     <div>
//       <Header title={title}></Header>
//       <Header title="Prasad"></Header>
//       <Header title="Prasad"></Header>
//       <Header title="Prasad"></Header>
//       <Header title="Prasad"></Header>
//       <button onClick={updateTitle}>update title</button>
//     </div>
//   )
// }

// function Header({title}){
//   return <div> {title} </div>
// }


// ------------------------------------------------------------------------------------

//above code can be written in this way to avoid the renrendering of all components 

// function App() {
//   return (
//     <div>
//        <HeaderWithButton></HeaderWithButton>         {/* dynamic component which will rerender*/}
//        <Header title="My Name is Manish"></Header>   {/* static component*/}
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("My name is Prasad");

//   function clickHandler() {
//     setFirstTitle("Name: " + Math.random())
//   }

//   return <>
//     <button onClick={clickHandler}>Click to change</button>
//     <Header title={firstTitle}></Header>
//   </>

// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }


// ------------------------------------------------------------

function App() {

  const [title, setTitle] = useState("Manish")

  function updateTitle() {
    setTitle(`Name: ${Math.random()}`);
  }
  
  return (
    <div>
      <Header title={title}></Header>
      <Header title="Prasad"></Header>
      <Header title="Prasad"></Header>
      <Header title="Prasad"></Header>
      <Header title="Prasad"></Header>
  
      <button onClick={updateTitle}>update title</button>
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div> {title} </div>
})


export default App