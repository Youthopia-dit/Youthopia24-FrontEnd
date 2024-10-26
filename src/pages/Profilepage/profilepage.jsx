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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Properties from '../../properties.json';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [eventList, setEventList] = useState([]);
  const [open, setOpen] = useState(false); // For Modal
  const [selectedEvents, setSelectedEvents] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

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
          `${Properties.base_url}/api/user/getProfile`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const eventList = res.data.profile.registeredEvent;

        const res2 = await axios.post(
          'https://27.123.248.68:4000/api/register/getRegistrations',
          { registrationIds: eventList }
        );

        setUser({
          user: res.data.profile,
          registeredEvent: res2.data.registrations,
        });
        setLoading(false);
        console.log(eventList)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    setLoading(true);
    fetchUser();
  }, []);

  const handleSignout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
    setSnackbarMessage('Logged Out Successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handlePaymentModalOpen = () => {
    setOpen(true);
  };

  const handlePaymentModalClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event, amount) => {
    const { name, checked } = event.target;
    const updatedSelectedEvents = { ...selectedEvents, [name]: checked };

    const updatedTotal = checked ? totalAmount + amount : totalAmount - amount;
    setTotalAmount(updatedTotal);

    setSelectedEvents(updatedSelectedEvents);
  };

  const handelModal = (data) => {
    setShowModal((prev) => !prev);
    setModalData(data);
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
                    Phone: {user.phone}
                    <br /> Email: {user.email}
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
                <div className="profile-info-tab">Name : {user.name}</div>
                <div className="profile-info-tab">College : {user.college}</div>
                <div className="profile-info-tab">Student ID : {user.collegeId}</div>
                <div className="profile-info-tab">Year : {user.year}</div>
                <div className="profile-info-tab">Branch : {user.branch}</div>
              </div>
            </div>
            <div className="scroller">
              <h1 className="register">Registered events</h1>
              <div className="registered">
                {user.registeredEvent.map((el, i) => {
                  console.log(el);
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

      <Dialog open={open} onClose={handlePaymentModalClose} classes={{ paper: "payment-dialog-box" }}>
        <Box className="payment-dialog">
          <DialogTitle className='payment-dialog-heading'>Select Events for Payment</DialogTitle>
          <DialogContent>
            {eventList.map((event, index) => (
              <div key={index} className='payment-dialog-content'>
                <Checkbox
                  checked={!!selectedEvents[event.regID]}
                  onChange={(e) => handleCheckboxChange(e, event.payment.amount)}
                  name={event.eventDetails.eventName}
                  className='payment-checkbox'
                />
                {event.eventDetails.eventName} - ₹{event.payment.amount}
              </div>
            ))}
            <p>Total Amount: ₹{totalAmount}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePaymentModalClose}>Close</Button>
            <Button
              onClick={() => {
                setSnackbarMessage('Payment successful');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                handlePaymentModalClose();
              }}
            >
              Pay
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

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
