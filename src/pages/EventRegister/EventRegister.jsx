import "./EventRegister.css";
import bg1 from "../../assets/bg1.png";
import React, { useState } from 'react'

export default function EventRegister() {
    const [membersCount, setMembersCount] = useState(1);
    const [members, setMembers] = useState([{ name: '', id: '' }]);

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
    return (
        <>
            <div className="event_register">
                <div className="background">
                    <img src={bg1} alt="bg-page" className="bgimage" />
                </div>

                <div className="participant-form">
                    <h2>Participant's Details</h2>
                    <form>
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
        </div >
            </div >
        </>
    )
}