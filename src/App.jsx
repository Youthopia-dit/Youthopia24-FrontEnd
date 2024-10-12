import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndividualEvent from './pages/Event/Individual/Individualpage'
import Loginpage from './pages/Login/Loginpage'
import Signuppage from './pages/Signup/Signuppage'
import Signup1 from './pages/Signup/Signup1' 
import Profilepage from './pages/Profilepage/profilepage'
import Gallery from './pages/Gallery/gallery'
import ComingSoon from './pages/Coming soon/ComingSoon'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/individualpage" element={<IndividualEvent />}/>
        <Route path="/Loginpage" element={<Loginpage />}/>
        <Route path="/Signuppage" element={<Signuppage />}/>
        <Route path="/Signup1" element={<Signup1 />}/>
        <Route path="/profile" element={<Profilepage />}/>
        <Route path="/" element={<ComingSoon />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
