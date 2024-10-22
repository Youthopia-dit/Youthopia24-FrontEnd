import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function EventRegister() {
    const location = useLocation();
    const { eventName, minParticipants, maxParticipants } = location.state || {};

    const [membersCount, setMembersCount] = useState(1);
    const [members, setMembers] = useState([{ name: '', id: '' }]);

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
        const newCount = membersCount + 1;
        setMembersCount(newCount);
        handleAddMember(newCount);
    };

    const decrementCount = () => {
        if (memberCount > 1) {
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
                    <form>
                        <h4>Team Leader Details:</h4>
                        <div className="form-group">
                            <input type="text" placeholder="Team Name" />
                        </div>

                        <div className="form-group">

                            <input type="text" placeholder="Student ID" />
                        </div>

                        <div className="form-group">

                            <input type="text" placeholder="Team Leader's Phone Number" />
                        </div>

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
                        <h4>Team Member Details:</h4>
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
                                />
                                <input
                                    type="text"
                                    placeholder={`Member ${index + 1} ID`}
                                    value={member.id}
                                    onChange={(e) => handleMemberChange(index, 'id', e.target.value)}
                                />
                            </div>
                        ))}
                    </form>
                    <button className="submit-btn">Submit</button>
                </div >
            </div >
        </>
    )
}