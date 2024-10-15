import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutuspage from './pages/Aboutus/Aboutuspage';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import Eventpage from './pages/Event/Eventpage';
import Homepage from './pages/Home/Homepage';
import { useEvents } from './store/events';



function App() {
  const [count, setCount] = useState(0)
  const { events, fetchEvents } = useEvents();

  useEffect(() => {
    fetchEvents();
  }, []);
  console.log(events)



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
