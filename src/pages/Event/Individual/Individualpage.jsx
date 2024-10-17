import React, { useState, useEffect } from 'react';
import './Individualpage.css';
import Navbar from '../../../components/Navbar/navbar';
import BGImage from '../../../assets/BackgroundLanding.webp';
import Image from '../../../assets/campus.png';
import { useLocation } from 'react-router-dom';

const IndividualEvent = () => {
  const location = useLocation();

  const eventDetails = location.state || {};

  console.log(eventDetails);

  if (!eventDetails) return <p>Event not found</p>;

  return (
    <>
      <Navbar />

      <div className="individual-event">
        <div className="event-container">
          <img
            src="./squid game-01 1.png"
            alt={eventDetails.name}
            className="event-image"
          />

          <div className="event-details">
            {/* <h2 className="event-title">{eventDetails.name}</h2> */}
            <h2 className="event-title">Technical Event</h2>
            <div className="event-info">
              <span className="event-data">
                {eventDetails.venue} • {eventDetails.date}
              </span>
            </div>

            <p className="event-desc">{eventDetails.event_description}</p>

            <div className="event-section">
              <strong>Event Rules:</strong>
              {/* <ul className='event-list'>
                                {rules.map((rule, index) => (
                                    <li key={eventDetails.index}>rule</li>
                                ))}
                            </ul> */}
            </div>

            <div className="event-section">
              <p className="event-size">
                Max Team Size: {eventDetails.teamMax}
              </p>
              <p className="event-size">
                Min Team Size: {eventDetails.teamMin}
              </p>
            </div>

            <div className="event-section">
              <strong>Event Coordinators:</strong>
              {/* <ul className='event-list'>
                                {coordinator.map((coord, index) => (
                                    <li key={eventDetails.index}>{eventDetails.coord}</li>
                                ))}
                            </ul> */}
            </div>

            <div className="event-section">
              <strong>Event Heads:</strong>
              <ul className="event-list">
                {/* {head.map((hd, index) => (
                                    <li key={eventDetails.index}>{eventDetails.hd}</li>
                                ))} */}
              </ul>
            </div>

            <div className="event-section">
              <strong>Fees:</strong> <span>{eventDetails.fees}</span>
            </div>

            <button className="register-btn">Register Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualEvent;
