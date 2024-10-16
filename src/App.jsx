import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Aboutuspage from './Pages/Aboutus/Aboutuspage';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import Homepage from './pages/Home/Homepage';
import Eventpage from './pages/Event/Eventpage1';
import TeamPage from './pages/Team/Teampage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Aboutuspage/>}/>
        <Route path="/" element={<Homepage />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/comingsoon" element={<ComingSoon />}/>
        <Route path="/events" element={<Eventpage />}/>
        <Route path="/team" element={<TeamPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
