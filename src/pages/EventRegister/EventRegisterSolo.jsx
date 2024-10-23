import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EventRegisterSolo() {
    const [user, setUser] = useState(null);
    const [RegistrationDetails, setRegistrationDetails] = useState({});
    
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
                setRegistrationDetails({
                    ...RegistrationDetails,
                    eventId: eventDetails._id,
                    email: userData.email,
                    college: userData.college,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle the error if necessary
            }
        };

        fetchUser();
        console.log(eventDetails);
    }, []);

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
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Student ID" />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Phone Number" />
                        </div>

                        {/* Ensure user is loaded before checking college */}
                        {user.college && user.college !== 'DIT University' && (
                            <div className="form-group">
                                <input type="text" placeholder="College Name" value={user.college} readOnly />
                            </div>
                        )}
                    </form>
                    <button className="submit-btn">Submit</button>
                </div >
            </div >
        </>
    );
}
