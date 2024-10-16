import React, {useState, useEffect} from 'react';
import './Individualpage.css';
import BGImage from '../../../assets/BackgroundLanding.webp'

const IndividualEvent = ({ eventId }) => {
    const [eventData, setEvenData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/events/${eventId}`)
        .then((response) => response.json())
        .then((data) => setEventData(data))
        .catch((error) => console.error('Error fetchinf event data:', error));
    }, [eventId]);

    if (!eventData) return <p>Loading event details...</p>

    const {title, description, image, coordinator, head, date, time, venue, fees, rules, teamMax, teamMin} = eventData;

    return (
        <>
        <div className='individual-event'>
            <div className='event-container'>
                <img src={image} alt={title} className='event-image' />

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
                        <p className='event-size'>Max Team Size:</p>
                    </div>

                    <div className='event-section'>
                        <strong>Event Coordinators:</strong>
                        <ul className='event-list'>
                            {coordinator.map((coordinator, index) => (
                                <li key={index}>{coordinator}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='event-section'>
                        <strong>Event Heads:</strong>
                        <ul className='event-list'>
                            {head.map((head, index) => (
                                <li key={index}>{head}</li>
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
    )
}
