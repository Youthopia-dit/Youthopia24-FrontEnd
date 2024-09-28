import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndividualEvent from './pages/Event/Individual/Individualpage'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/individualpage" element={<IndividualEvent />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
