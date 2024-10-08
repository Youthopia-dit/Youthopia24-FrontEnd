import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutuspage from './Pages/Aboutus/Aboutuspage'
import ProfilePage from './pages/Profilepage/profilepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Aboutuspage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
