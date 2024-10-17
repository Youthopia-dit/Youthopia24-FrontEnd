import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Aboutuspage from './pages/Aboutus/Aboutuspage';
import ProfilePage from './pages/Profilepage/profilepage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Gallery from './pages/Gallery/gallery';
import Homepage from './pages/Home/Homepage';
import Eventpage from './pages/Event/Eventpage1';
import IndividualEvent from './pages/Event/Individual/Individualpage';
import TeamPage from './pages/Team/Teampage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Aboutuspage/>}/>
        <Route path="/" element={<Homepage />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/comingsoon" element={<ComingSoon />}/>
        <Route path="/events" element={<Eventpage />}/>
        <Route path="/event-details" element={<IndividualEvent />}/>
        <Route path="/team" element={<TeamPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
