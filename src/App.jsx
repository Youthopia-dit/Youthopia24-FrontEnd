import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutuspage from './Pages/Aboutus/Aboutuspage'
import ProfilePage from './pages/Profilepage/profilepage'
import ComingSoon from './pages/Coming soon/ComingSoon'
import Gallery from './pages/Gallery/gallery';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/" element={<ComingSoon />}/>
        <Route path="/gallery" element={<Gallery />}/>
=======
        <Route path="/about" element={<Aboutuspage/>}/>
>>>>>>> origin/yadav
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
