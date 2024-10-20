import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import ProfilePage from './pages/Profilepage/profilepage'
import ComingSoon from './pages/Coming soon/ComingSoon'
import Gallery from './pages/Gallery/gallery';
import Eventpage from './pages/Event/Eventpage1';
import { BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/" element={<ComingSoon />}/>
        <Route path="/events" element={<Eventpage />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
