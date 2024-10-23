import { useState, useEffect } from 'react';
import './profilepage.css';
import imgL from '../../assets/LeftImg.png';
import imgR from '../../assets/RightImg.png';
import imgLC from '../../assets/FrameLC.png';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/navbar';
import dummy from '../../assets/demo_profile.jpg';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setSnackbarMessage('User Not logged in!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      window.location.href = '/getting-started';
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          'https://27.123.248.68:4000/api/user/getProfile',
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      // console.log(res.data.profile);
      // setUser(res.data.profile);
    };

    const fetchRegisteredEvents = async (userId) => {
      try {
        const res = await axios.get(
          `https://27.123.248.68:4000/api/user/${userId}/registered-events`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
        setEvents(res.data.events); // Assuming the API returns an array of events
      } catch (error) {
        console.error('Error fetching registered events:', error);
      }
    };

    fetchUser();
  }, []);

  const handleSignout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
    setSnackbarMessage('Logged Out Successdully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handlePayment = () => {
    setSnackbarMessage('Payments are opening soon!');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="ProfilePage">
        <div className="background-div">
          <img className="ImgLeftCorner" src={imgLC}></img>
          <img className="imageLeft" src={imgL}></img>
          <img className="imageRight" src={imgR}></img>
        </div>
        {!user && (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        )}
        {user && (
          <>
            <div className="profile-details">
              <div className="left-column">
                <div className="profile-image">
                  <img src={dummy} alt="profile" className="profile-pic" />
                </div>
                <div className="contact">
                  <p className="contactinfo">
                    Phone: {user.phone}
                    <br /> Email: {user.email}
                  </p>
                </div>
                <div className="profile-buttons">
                  <button className="profile-button" onClick={handleSignout}>
                    Sign Out
                  </button>
                  <button
                    className="profile-button disabled-button"
                    onClick={handlePayment}
                  >
                    Proceed for Payment
                  </button>
                </div>
              </div>
              <div className="right-column">
                <div className="profile-heading">Profile Details</div>
                <div className="profile-info-tab">Name : {user.name}</div>
                <div className="profile-info-tab">College : {user.college}</div>
                <div className="profile-info-tab">
                  Student ID : {user.collegeId}
                </div>
                <div className="profile-info-tab">Year : {user.year}</div>
                <div className="profile-info-tab">Branch : {user.branch}</div>
              </div>
            </div>
            <div className="scroller">
              <h1 className="register">Registered events</h1>
              <div className="registered">
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
                <img
                  src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
                  className="events"
                ></img>
              </div>
              <br />
            </div>
          </>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}
export default ProfilePage;

{
  /* <div className="info">
                <div>
                    <div className="image" >
                        <h3 className="heading">Profile photo</h3>
                    </div>
                    <div className="contact">
                        <h3 className="contactinfo">Phone: 1234567890 <br /> Email: example@gmail.com</h3>
                    </div>
                </div>
                <div className="mainheading">
                    <div className="bgplate"><h2 className="text"> Your Name : Name</h2></div>
                    <div className="bgplate"><h2 className="text"> College: DIT</h2></div>
                    <div className="bgplate"><h2 className="text"> College ID: ID</h2></div>
                    <div className="bgplate"><h2 className="text"> Branch: CSE</h2></div>
                    <div className="bgplate"><h2 className="text"> Year: 2nd</h2></div>
                </div>
            </div>
            <br />
            <br />
            <div className="scroller">
                <h1 className="register">Registered events</h1>
                <div className="registered">
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                </div>
                <br />
            </div> */
}
