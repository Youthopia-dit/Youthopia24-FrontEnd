import React, { useState, useEffect } from 'react';
import './Individualpage.css';
import BGImage from '../../../assets/BackgroundLanding.webp';
import Image from '../../../assets/campus.png';

const IndividualEvent = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        // Setting dummy data directly without fetching from API
        const dummyData = {
            title: 'Tech Symposium 2024',
            description: 'Join us for an exciting tech symposium covering the latest advancements in AI, robotics, and software development.',
            coordinator: ['John Doe', 'Jane Smith'],
            head: ['Alex Johnson', 'Chris Lee'],
            date: 'October 24, 2024',
            time: '10:00 AM - 4:00 PM',
            venue: 'Main Auditorium, DIT University',
            fees: '₹500',
            rules: ['No outside food allowed', 'Follow event schedule', 'Bring your college ID'],
            teamMax: 5,
            teamMin: 2,
        };

        setEventData(dummyData);
    }, []);

    if (!eventData) return <p>Loading event details...</p>;

    const { title, description, image, coordinator, head, date, time, venue, fees, rules, teamMax, teamMin } = eventData;

    return (
        <>
            <div className='individual-event'>
                <div className='event-container'>
                    <img src={Image} alt={title} className='event-image' />

                    <div className='event-details'>
                        <h2 className='event-title'>{title}</h2>
                        <div className='event-info'>
                            <span className='event-data'>{venue} • {date} • {time}</span>
                        </div>

                        <p className='event-desc'>{description}</p>

                        <div className='event-section'>
                            <strong>Event Rules:</strong>
                            <ul className='event-list'>
                                {rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='event-section'>
                            <p className='event-size'>Max Team Size: {teamMax}</p>
                            <p className='event-size'>Min Team Size: {teamMin}</p>
                        </div>

                        <div className='event-section'>
                            <strong>Event Coordinators:</strong>
                            <ul className='event-list'>
                                {coordinator.map((coord, index) => (
                                    <li key={index}>{coord}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='event-section'>
                            <strong>Event Heads:</strong>
                            <ul className='event-list'>
                                {head.map((hd, index) => (
                                    <li key={index}>{hd}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='event-section'>
                            <strong>Fees:</strong> <span>{fees}</span>
                        </div>

                        <button className='register-btn'>Register Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndividualEvent;
