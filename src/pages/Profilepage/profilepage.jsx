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
import Properties from '../../properties.json';
import Modal from '../../components/Modal/Modal';
import PaymentModal from '../../components/PaymentModal/PaymentModal';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false); // For Modal
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchUserProfile = async (token) => {
      try {
        // Fetch user profile
        const res = await axios.get(
          `${Properties.base_url}/api/user/getProfile`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
  
        return res.data.profile;
      } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
      }
    };
  
    const fetchUserRegistrations = async (registrationIds) => {
      try {
        // Fetch registrations based on the retrieved profile's event list
        const res = await axios.post(
          `${Properties.base_url}/api/register/getRegistrations`,
          { registrationIds }
        );
        return res.data.registrations;
      } catch (error) {
        console.error('Error fetching user registrations:', error);
        throw error;
      }
    };
  
    const processUserEvents = (registrations) => {
      console.log("svsdv", registrations)
      return registrations.filter(
        (event) => !event.payment.paid && Number(event.payment.amount) > 0
      );
    };
  
    const initializeUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setSnackbarMessage('User Not logged in!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        navigate('/getting-started');
        return;
      }
  
      setLoading(true);
      try {
        const userProfile = await fetchUserProfile(token);
        const registrations = await fetchUserRegistrations(userProfile.registeredEvent);
  
        // Set user and filtered events
        setUser({
          ...userProfile,
          registrations: registrations || [],
        });
  
        const filteredEvents = processUserEvents(registrations || []);
        console.log(filteredEvents)
        setFilteredEvents(filteredEvents);
      } catch (error) {
        console.error('Error initializing user data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    initializeUserData();
  }, [open]);
  

  const handleSignout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
    setSnackbarMessage('Logged Out Successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handlePaymentModalOpen = async () => {
    if(filteredEvents.length === 0) {
      setSnackbarMessage('No events to pay for!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      return;
    } 
    setOpen(true);
  };

  const handlePaymentModalClose = () => {
    setOpen(false);
  };

  const handelModal = (data) => {
    if (data) {
      setShowModal(true);
      setModalData(data);
    } else {
      setShowModal(false);
      setModalData(null);
    }
  };

  return (
    <>
      {showModal && <Modal data={modalData} handelModal={handelModal} />}
      <Navbar />
      <div className="ProfilePage">
        <div className="background-div">
          <img className="ImgLeftCorner" src={imgLC} alt="" />
          <img className="imageLeft" src={imgL} alt="" />
          <img className="imageRight" src={imgR} alt="" />
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
                    Phone: {user?.phone}
                    <br /> Email: {user?.email}
                  </p>
                </div>
                <div className="profile-buttons">
                  <button className="profile-button" onClick={handleSignout}>
                    Sign Out
                  </button>
                  <button
                    className="profile-button"
                    onClick={handlePaymentModalOpen}
                  >
                    Proceed for Payment
                  </button>
                </div>
              </div>
              <div className="right-column">
                <div className="profile-heading">Profile Details</div>
                <div className="profile-info-tab">Name : {user?.name}</div>
                <div className="profile-info-tab">College : {user?.college}</div>
                <div className="profile-info-tab">
                  Student ID : {user?.collegeId}
                </div>
                <div className="profile-info-tab">Year : {user?.year}</div>
                <div className="profile-info-tab">Branch : {user?.branch}</div>
              </div>
            </div>
            <div className="scroller">
              <h1 className="register">Registered events</h1>
              <div className="registered">
                {user?.registrations?.map((el, i) => {
                  return (
                    <img
                      key={i}
                      src={`${el.eventDetails.event_poster}`}
                      alt="event poster"
                      className="events"
                      onClick={() => {
                        handelModal(el);
                      }}
                    ></img>
                  );
                })}
              </div>
              <br />
            </div>
          </>
        )}
      </div>

      {user && <PaymentModal
        open={open}
        onClose={handlePaymentModalClose}
        registeredEvents={filteredEvents}
        name={user.name}
        email={user.email}
        phone={user.phone}
      />}

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
