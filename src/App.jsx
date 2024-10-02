import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

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
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
