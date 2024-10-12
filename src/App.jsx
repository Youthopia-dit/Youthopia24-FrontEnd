import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import ProfilePage from './pages/Profilepage/profilepage'
import ComingSoon from './pages/Coming soon/ComingSoon'
import Gallery from './pages/Gallery/gallery';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndividualEvent from './pages/Event/Individual/Individualpage'
import Loginpage from './pages/Login/Loginpage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/individualpage" element={<IndividualEvent />}/>
        <Route path="/Loginpage" element={<Loginpage />}/>
        
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/" element={<ComingSoon />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
