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
            setRegistrationDetails({...RegistrationDetails,  eventId: eventDetails._id, email: user.email, college: user.college });
        if(maxParticipants === 1) {
            setRegistrationDetails({...RegistrationDetails,  name: user.name, id: user.id, phone: user.phone });
        }
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
            id: '',
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
                        {maxParticipants > 1 ? <h4>Leader Details:</h4> : <></>}
                        <div className="form-group">
                            <input type="text" placeholder={maxParticipants > 1 ? "Team Name" : "Name"} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Student ID" />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder={maxParticipants > 1 ? "Leader's Phone Number" : "Phone Number"} />
                        </div>

                        {maxParticipants > 1 ? <div className="form-group members-counter">
                            <button type="button" onClick={decrementCount} className="counter-btn">-</button>
                            <input
                                className="counting"
                                type="number"
                                min="1"
                                value={membersCount}
                                readOnly
                            />
                            <button type="button" onClick={incrementCount} className="counter-btn">+</button>
                        </div> : <></>}
                        {maxParticipants > 1 ? <h4>Team Member Details:</h4> : <></>}
                        {maxParticipants > 1 ? <>{members.map((member, index) => (
                            <div className="form-group" key={index}>
                                <label>Team Member {index + 1}:</label>
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} Name`}
                                    value={member.name}
                                    onChange={(e) =>
                                        handleMemberChange(index, 'name', e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} ID`}
                                    value={member.id}
                                    onChange={(e) => handleMemberChange(index, 'id', e.target.value)}
                                />
                            </div>
                        ))}</> : <></>}
                    </form>
                    <button className="submit-btn">Submit</button>
                </div >
            </div >
        </>
    )
}