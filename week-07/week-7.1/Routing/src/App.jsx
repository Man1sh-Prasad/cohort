import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { React, Suspense, lazy } from 'react'
// import { Landing } from './pages/Landing'
// import { Dashboard } from './pages/Dashboard'
const Dashboard = lazy(() => import('./pages/Dashboard'))   // lazy loading 
const Landing = lazy(() => import('./pages/Landing'))

function App() {

  //
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>    
        <Routes>
          <Route path='/dashboard'element={<Suspense fallback={'....loading'}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={'.... loading'}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Navbar() {
  const navigate = useNavigate();  

  return <div>
      <button onClick={() => {navigate('/')}}>Landing Page</button>
      <button onClick={() =>{navigate('/dashboard')}}>Dashboard</button>
    </div>
}

export default App
