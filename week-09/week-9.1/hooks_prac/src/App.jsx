import React, { useEffect, useState } from 'react'
import './App.css'

// function App() {
//   return (
//     <>
//        <MyComponent />
//     </>
//   )
// }

// // class based component 
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }


// function MyComponent() {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(prevCount => prevCount + 1)
//   }

//   return <div>
//     {count}
//     <button onClick={increment}>Increase Count</button>
//   </div>
// }





// life cycle 
function App() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setShow(show => !show)
    }, 3000)
  }, [])

  return (
    <>
       {show ? <MyComponent /> : <div></div>}
    </>
  )
}

// function MyComponent() {
//   useEffect(() => {
//     console.log("Component mounted");

//     return () => {
//       console.log("component unmounted");
//     }
//   }, [])

//   return <div>
//     from inside of my component
//   </div>
// }

    // class based component
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("component mounted")
  }

  componentWillUnmount() {
    // clean up {e.g. remove listeners or cancel subscriptions}
    console.log("unmounted")
  }

  render() {
    // render UI
    return <div> HI there</div>
  }
}

export default App
