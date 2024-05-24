import { useEffect, useState } from 'react'
import './App.css'


// --- useIsOnline----

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => setIsOnline(true)
//     const handleOffline =  () => setIsOnline(false)

//     // Attach event listeners to the 'online' and 'offline' event
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);

//     // Cleanup: Remove event listeners on component unmount
//     return () => {
//       window.removeEventListener("online", handleOnline)
//       window.removeEventListener('offline', handleOffline)
//     }
//   }, [])

//   return isOnline;
// }

// function App() {
//   // to get the current online status
//   const isOnline = useIsOnline();

//   return (
//     <>
//       {isOnline ? "You are Online !!!" : "You are Offline. Please reconnect."}
//     </>
//   )

// }


// useMousePointer 

function useMousePointer() {
  const [position, setPosition] = useState({x: 0, y: 0});

  // function will set the position of mouse-cursor when it moves
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // cleanup: 
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position;
}

function App() {
  const mousePointer = useMousePointer();

  return (
    <div>
      {`Your mouse pointer position is X: ${mousePointer.x} and Y: ${mousePointer.y}`}
    </div>
  )
}

export default App
