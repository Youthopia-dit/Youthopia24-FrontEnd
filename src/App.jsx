import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Login/Loginpage';
import GettingStarted from './pages/Login/start_page';
import Signuppage from './pages/Signup/Signuppage';
import Signupq from './pages/Signup/Signupq';
import SignIn from './pages/Signup/signup_details';
import Aboutuspage from './pages/Aboutus/Aboutuspage';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import Homepage from './pages/Home/Homepage';
import Eventpage from './pages/Event/Eventpage1';
import IndividualEvent from './pages/Event/Individual/Individualpage';
import TeamPage from './pages/Team/Teampage';
import VerifyOtpPage from './pages/Signup/VerifyOtpPage';
import ErrorPage from "./pages/utils/error";
import SuccessPage from "./pages/utils/paymentsuccessfulpage"
import FailPage from "./pages/utils/paymentfail"
import EventRegister from "./pages/EventRegister/EventRegister"
import EventRegisterSolo from './pages/EventRegister/EventRegisterSolo';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/individualpage" element={<IndividualEvent />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup-first" element={<Signuppage />} />
          <Route path="/signup/question" element={<Signupq />} />
          <Route path="/signup-second" element={<SignIn />} />
          <Route path="/" element={<Homepage />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comingsoon" element={<ComingSoon />}/>
          <Route path="/events" element={<Eventpage />}/>
          <Route path="/event-details" element={<IndividualEvent />}/>
          <Route path="/team" element={<TeamPage />}/>
          <Route path="/about" element={<Aboutuspage />}/>
          <Route path="/verify-otp" element={<VerifyOtpPage />}/>
          <Route path="/error" element={<ErrorPage />}/>
          <Route path="/success" element={<SuccessPage />}/>
          <Route path="/fail" element={<FailPage />}/>
          <Route path="/register" element={<EventRegister />}/>
          <Route path="/register-solo" element = {<EventRegisterSolo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
