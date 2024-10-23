import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EventRegisterSolo() {
    const [user, setUser] = useState(null);
    const [RegistrationDetails, setRegistrationDetails] = useState({
        name: '',
        collegeId: '',
        phoneNumber: '',
        college: '',
        email: '',
        eventId: '',
        identityNumber: '',
        members: [{ name: '', college: '', id: '', govId: '' }],
    });
    
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
                    eventId: eventDetails._id,
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

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistrationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleMemberChange = (index, field, value) => {
        const updatedMembers = [...RegistrationDetails.members];
        updatedMembers[index][field] = value;
        setRegistrationDetails((prevDetails) => ({
            ...prevDetails,
            members: updatedMembers,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const registrationData = {
            email: RegistrationDetails.email,
            eventId: RegistrationDetails.eventId,
            teamName: RegistrationDetails.name,
            college: RegistrationDetails.college,
            members: RegistrationDetails.members,
            phoneNumber: RegistrationDetails.phoneNumber,
        };

        console.log('Submitted Registration:', registrationData);

        try {
            const res = await axios.post(
                'https://27.123.248.68:4000/api/event/register',
                registrationData
            );
            console.log('Registration Successful:', res.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
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
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" value={RegistrationDetails.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            name="collegeId"
                            placeholder="Student ID"
                            value={RegistrationDetails.collegeId}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                            <input type="text" name="phoneNumber" placeholder="Phone Number" value={RegistrationDetails.phoneNumber} onChange={handleChange} required/>
                        </div>

                        {/* Ensure user is loaded before checking college */}
                        {user.identityNumber &&(
                            <div className="form-group">
                                <input type="text" name="identityNumber" placeholder="Identity Number" value={RegistrationDetails.identityNumber} readOnly />
                            </div>
                        )}
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                    
                </div >
            </div >
        </>
    );
}
