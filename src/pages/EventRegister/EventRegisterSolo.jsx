import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function EventRegisterSolo() {
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('authToken');
    const [RegistrationDetails, setRegistrationDetails] = useState({
        name: '',
        collegeId: '',
        phoneNumber: '',
        college: '',
        email: '',
        eventId: '',
        identityNumber: '',
    });

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const location = useLocation();
    const eventDetails = location.state['eventDetails'] || {};

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // Handle redirection for unauthenticated users
            setSnackbarMessage('User Not logged in!');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            window.location.href = '/getting-started';
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await axios.get('https://27.123.248.68:4000/api/user/getProfile', {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                const userData = res.data.profile;
                setUser(userData);
                console.log(userData);
                setRegistrationDetails((prevDetails) => ({
                    ...prevDetails,
                    name: userData.name || '',
                    collegeId: userData.collegeId || '',
                    phoneNumber: userData.phone || '',
                    college: userData.college || '',
                    email: userData.email,
                    eventId: eventDetails.event_id,
                    identityNumber: userData.identityNumber || '',
                }));
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle the error if necessary
            }
        };

        fetchUser();
        console.log(eventDetails);
    }, []);

    function getPrice(teamSize, isFromDit) {
        const priceInfo = eventDetails.prices.find(price => price.teamSize === teamSize);
    
        if (!priceInfo) {
            return 'Team size not supported';
        }
    
        return isFromDit ? priceInfo.priceDit : priceInfo.priceNonDit;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistrationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fromDIT = RegistrationDetails.college === 'DIT University';
        const payment = {
            paid: false,
            amount: getPrice(1, fromDIT),
        }

        const members = {
            name: RegistrationDetails.name,
            collegeId: RegistrationDetails.collegeId,
            personalId: RegistrationDetails.identityNumber,
        }

        const registrationData = {
            email: RegistrationDetails.email,
            eventId: RegistrationDetails.eventId,
            teamName: RegistrationDetails.name,
            college: RegistrationDetails.college,
            members: members,
            phoneNumber: RegistrationDetails.phoneNumber,
            payment: payment,
            
        };

        console.log('Submitted Registration:', registrationData);

        try {
            const res = await axios.post(
                'http://localhost:4000/api/register/eventRegister',
                registrationData,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                }
            );
            if(res.status === 201) {
                setSnackbarMessage('Registered Successfully');
                setSnackbarSeverity('success'); // Set to success severity
                setSnackbarOpen(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }

        } catch (error) {
            console.error('Error during registration:', error);
            setSnackbarMessage('Login Failed');
            setSnackbarSeverity('error'); // Set to error severity
            setSnackbarOpen(true);
        }
    };

    if (!user) {
        return <div>Loading...</div>; // Add a loading state while fetching user data
    }

    return (
        <>
            <div className="event_register">
                <div className="background">
                    <img src={bg1} alt="bg-page" className="bgimage" />
                </div>

                <div className="participant-form">
                    <h2>Event Registration Form</h2>
                    <div className="form-event-details">
                        Event Name: {eventDetails.event_name}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" value={RegistrationDetails.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Student ID</label>
                            <input
                                type="text"
                                name="collegeId"
                                placeholder="Student ID"
                                value={RegistrationDetails.collegeId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <label>Phone Number</label>
                        <div className="form-group">
                            <input type="text" name="phoneNumber" placeholder="Phone Number" value={RegistrationDetails.phoneNumber} onChange={handleChange} required />
                        </div>

                        {/* Ensure user is loaded before checking college */}
                        {user.identityNumber && (
                            <>
                                <label>Personal ID</label>
                                <div className="form-group">
                                    <input type="text" name="identityNumber" placeholder="Identity Number" value={RegistrationDetails.identityNumber} readOnly />
                                </div>
                            </>
                        )}
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>

                </div >
            </div >
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
        </>
    );
}
