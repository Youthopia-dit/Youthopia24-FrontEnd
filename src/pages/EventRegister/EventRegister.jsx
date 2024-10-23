import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EventRegister() {
    const [user, setUser] = useState(null);
    const [RegistrationDetails, setRegistrationDetails] = useState({});

    const location = useLocation();
    const eventDetails = location.state['eventDetails'] || {};

    const minParticipants = eventDetails.participant_min;
    const maxParticipants = eventDetails.participant_max;

    const [membersCount, setMembersCount] = useState(minParticipants);
    const [members, setMembers] = useState([{ name: '', id: '' }]);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setSnackbarMessage('User Not logged in!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            window.location.href = '/getting-started';
        }
        const fetchUser = async () => {
            const res = await axios.get('https://27.123.248.68:4000/api/user/getProfile', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data.profile);
            setUser(res.data.profile);
            setRegistrationDetails({ ...RegistrationDetails, eventId: eventDetails._id, email: user.email, college: user.college });
        }
        fetchUser();
        console.log(eventDetails);
    }, []);

    useEffect(() => {
        setMembers(Array(membersCount).fill({ name: '', id: '' }));
    }, [membersCount]);

    const handleAddMember = (count) => {
        const newMembers = Array.from({ length: count }, (_, i) => ({
            name: '',
            collegeId: '',
            personalId: ''
        }));
        setMembers(newMembers);
        setMembersCount(count);
    };

    const handleMemberChange = (index, field, value) => {
        const updatedMembers = [...members];
        updatedMembers[index][field] = value;
        setMembers(updatedMembers);
    };

    const incrementCount = () => {
        if (membersCount < maxParticipants) {
            const newCount = membersCount + 1;
            setMembersCount(newCount);
            handleAddMember(newCount);
        }
    };

    const decrementCount = () => {
        if (membersCount > minParticipants) {
            const newCount = membersCount - 1;
            setMembersCount(newCount);
            handleAddMember(newCount);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test")
        console.log('Registration Details:', RegistrationDetails);
        console.log('Members:', members);
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
                        <h4>Leader Details:</h4>
                        <div className="form-group">
                            <input type="text" placeholder="Team Name" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Leader's Phone Number"  required/>
                        </div>

                        <div className="form-registration-row">
                            <h4>Team Member Details:</h4>
                            <div className="form-group members-counter">
                                <button type="button" onClick={decrementCount} className="counter-btn">-</button>
                                <input
                                    className="counting"
                                    type="number"
                                    min="1"
                                    value={membersCount}
                                    readOnly
                                />
                                <button type="button" onClick={incrementCount} className="counter-btn">+</button>
                            </div>
                        </div>
                        {members.map((member, index) => (
                            <div className="form-group" key={index}>
                                <label>Team Member {index + 1}:</label>
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} Name`}
                                    value={member.name}
                                    onChange={(e) =>
                                        handleMemberChange(index, 'name', e.target.value)
                                    }
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} ID`}
                                    value={member.id}
                                    onChange={(e) => handleMemberChange(index, 'collegeId', e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} Personal ID`}
                                    value={member.name}
                                    onChange={(e) =>
                                        handleMemberChange(index, 'personalId', e.target.value)
                                    }
                                    required
                                />
                            </div>
                        ))}
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                </div >
            </div >
        </>
    )
}