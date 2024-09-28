import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProfilePage from './pages/Profilepage/profilepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
