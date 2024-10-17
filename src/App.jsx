// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/Coming soon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import IndividualEvent from './pages/Event/Individual/Individualpage';
import Loginpage from './pages/Login/Loginpage';
import Loginpage1 from './pages/Login/Loginpage1';
import Signuppage from './pages/Signup/Signuppage';
import Signupq from './pages/Signup/Signupq';
import Signifyes from './pages/Signup/Signifyes';
import Signifno from './pages/Signup/Signifno';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/individualpage" element={<IndividualEvent />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/loginpage1" element={<Loginpage1 />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/signup/question" element={<Signupq />} />
          <Route path="/signup/dit" element={<Signifyes />} />
          <Route path="/signup/non-dit" element={<Signifno />} />
          <Route path="/" element={<ComingSoon />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
