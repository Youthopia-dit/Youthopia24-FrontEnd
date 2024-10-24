import { useState, useEffect } from 'react';
import './profilepage.css';
<<<<<<< HEAD
import imgL from "../../assets/LeftImg.png";
import imgR from "../../assets/RightImg.png";
import imgLC from "../../assets/FrameLC.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/navbar";
import dummy from "../../assets/demo_profile.jpg";
import axios from "axios";
=======
import imgL from '../../assets/LeftImg.png';
import imgR from '../../assets/RightImg.png';
import imgLC from '../../assets/FrameLC.png';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/navbar';
import dummy from '../../assets/demo_profile.jpg';
import axios from 'axios';
>>>>>>> 26caeb814a17f471f14ddb3aff7e60f3d7be3c17
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
<<<<<<< HEAD
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]); // State for registered events
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
=======
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [loading, setLoading] = useState(true);
>>>>>>> 26caeb814a17f471f14ddb3aff7e60f3d7be3c17

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

<<<<<<< HEAD
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
            const res = await axios.get('https://27.123.248.68:4000/api/user/getProfile', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            console.log(res.data.profile);
            setUser(res.data.profile);
           } catch (error) {
            console.error("Error fetching user data:", error);
           }
           
        };

        const fetchRegisteredEvents = async (userId) => {
            try {
                const res = await axios.get(`https://27.123.248.68:4000/api/user/${userId}/registered-events`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    },
                });
                setEvents(res.data.events);
            } catch (error) {
                console.error("Error fetching registered events:", error);
            }
        };

        fetchUser();
    }, []);

    const handleSignout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
        setSnackbarMessage('Logged Out Successfully!');
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
                    <img className="ImgLeftCorner" src={imgLC} alt="Left Corner" />
                    <img className="imageLeft" src={imgL} alt="Left" />
                    <img className="imageRight" src={imgR} alt="Right" />
                </div>
                {!user ? (
                    <div className="loading">
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <>
                        <div className="profile-details">
                            <div className="left-column">
                                <div className="profile-image">
                                    <img src={dummy} alt="profile" className="profile-pic" />
                                </div>
                                <div className="contact">
                                    <p className="contactinfo">Phone: {user.phone}<br /> Email: {user.email}</p>
                                </div>
                                <div className="profile-buttons">
                                    <button className="profile-button" onClick={handleSignout}>Sign Out</button>
                                    <button className="profile-button disabled-button" onClick={handlePayment}>Proceed for Payment</button>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="profile-heading">
                                    Profile Details
                                </div>
                                <div className="profile-info-tab">
                                    Name : {user.name}
                                </div>
                                <div className="profile-info-tab">
                                    College : {user.college}
                                </div>
                                <div className="profile-info-tab">
                                    Student ID : {user.collegeId}
                                </div>
                                <div className="profile-info-tab">
                                    Year : {user.year}
                                </div>
                                <div className="profile-info-tab">
                                    Branch : {user.branch}
                                </div>
                            </div>
                        </div>
                        {/* <div className="scroller">
                            <h1 className="register">Registered events</h1>
                            <div className="registered">
                                {events.length > 0 ? (
                                    events.map((event) => (
                                        <img key={event._id} src={event.imageUrl} className="events" alt={event.name} />
                                    ))
                                ) : (
                                    <p>No registered events found.</p>
                                )}
                            </div>
                            <br />
                        </div> */}
                        <h1 className="comingSoon">Registered Events coming soon</h1>
                        </>
                )
                }
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

{/* <div className="info">
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
            */}
=======
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token);
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

        setUser(res.data.profile);
        const eventList = res.data.profile.registeredEvent;
        const res2 = await axios.post('https://27.123.248.68:4000/api/register/getRegistrations', {registrationIds: eventList});
        setUser({...user, registeredEvent: res2.data.registrations});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
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
        {loading && (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        )}
        {!loading && (
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
                {user.registeredEvent.map((el, i) => {
                    console.log(el)
                  return (
                    <img
                      key={i}
                      src={`${el.eventDetails.event_poster}`}
                      className="events"
                    ></img>
                  );
                })}
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
>>>>>>> 26caeb814a17f471f14ddb3aff7e60f3d7be3c17
