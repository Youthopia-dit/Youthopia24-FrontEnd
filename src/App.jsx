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
import Loginpage1 from './pages/Login/Loginpage1'
import Signuppage from './pages/Signup/Signuppage'
import Signupq from './pages/Signup/Signupq'
import Signifyes from './pages/Signup/signifyes'
import Signifno from './pages/Signup/Signifno'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/individualpage" element={<IndividualEvent />}/>
        <Route path="/Loginpage" element={<Loginpage />}/>
        <Route path="/Loginpage1" element={<Loginpage1 />} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/Signupq" element={<Signupq /> } />
        <Route path="/signifyes" element={<Signifyes />} />
        <Route path="/signifno" element={<Signifno />} />
        <Route path="/" element={<ComingSoon />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
