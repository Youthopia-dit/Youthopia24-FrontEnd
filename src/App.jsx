import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import ProfilePage from './pages/Profilepage/profilepage'
import ComingSoon from './pages/Coming soon/ComingSoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/comingsoon" element={<ComingSoon />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
