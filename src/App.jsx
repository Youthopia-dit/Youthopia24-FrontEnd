import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Login/Loginpage';
import Loginpage1 from './pages/Login/Loginpage1';
import Signuppage from './pages/Signup/Signuppage';
import Signupq from './pages/Signup/Signupq';
import Signifyes from './pages/Signup/Signifyes';
import Signifno from './pages/Signup/Signifno';
import Aboutuspage from './pages/Aboutus/Aboutuspage';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import Homepage from './pages/Home/Homepage';
import Eventpage from './pages/Event/Eventpage1';
import IndividualEvent from './pages/Event/Individual/Individualpage';
import TeamPage from './pages/Team/Teampage';
import VerifyOtpPage from './pages/Signup/VerifyOtpPage';


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
          <Route path="/" element={<Homepage />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comingsoon" element={<ComingSoon />}/>
          <Route path="/events" element={<Eventpage />}/>
          <Route path="/event-details" element={<IndividualEvent />}/>
          <Route path="/team" element={<TeamPage />}/>
          <Route path="/about" element={<Aboutuspage/>}/>
          <Route path="/verify-otp" element={<VerifyOtpPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
