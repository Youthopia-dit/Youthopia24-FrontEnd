import React, { useState, useEffect } from 'react';
import './Individualpage.css';
import Navbar from '../../../components/Navbar/navbar';
import BGImage from '../../../assets/BackgroundLanding.webp';
import Image from '../../../assets/campus.png';
import { useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';

const IndividualEvent = () => {
  const location = useLocation();

  const eventDetails = location.state || {};

  console.log(eventDetails);

  if (!eventDetails) return <p>Event not found</p>;

  const teamSizes = eventDetails.prices.map(price => price.teamSize);
  return (
    <>
      <Navbar />

      <div className="individual-event">
        <div className="event-container">
          <div className="event-poster">
            <img src={eventDetails.event_poster} alt="event-poster" />
          </div>
          <div className="event-details">
            {/* <h2 className="event-title">{eventDetails.name}</h2> */}
            <h2 className="event-title">{eventDetails.event_name}</h2>
            <div className="event-info">
              <span className="event-data">
                {eventDetails.venue} • {eventDetails.date} • {eventDetails.start_time} - {eventDetails.end_time}
              </span>
            </div>

            <div className="event-desc">{eventDetails.event_description}</div>

            <div className="event-section">
              <strong>Event Rules:</strong>
              <ul className='event-rule-list'>
                {eventDetails.rules.map((rule, index) => (
                  <li key={eventDetails.index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className="event-section">
              <p className="event-size">
                Max Team Size: {eventDetails.participant_max}
              </p>
              <p className="event-size">
                Min Team Size: {eventDetails.participant_min}
              </p>
            </div>

            <div className="event-section">
              <strong>Event Coordinators:</strong>
              <ul className="event-rule-list">
              {Object.entries(eventDetails.coordinator).map(([name, number]) => (
                <li key={name}>
                  <strong>{name}:</strong> {number}
                </li>
              ))}
                </ul>
            </div>

            <div className="event-section">
              <strong>Event Heads:</strong>
              <ul className="event-rule-list">
                {Object.entries(eventDetails.overall_head).map(([name, number]) => (
                  <li key={name}>
                    <strong>{name}:</strong> {number}
                  </li>
                ))}
              </ul>
            </div>

            <div className="event-section">
              <strong>Fees:</strong> <span>{eventDetails.fees}</span>
              <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th></th>
            {teamSizes.map((size) => (
              <th key={size}>Team Size {size}</th> 
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DIT</strong></td> 
            {eventDetails.prices.map((price, index) => (
              <td key={`dit-${index}`}>{price.priceDit}</td>
            ))}
          </tr>
          <tr>
            <td><strong>Non DIT</strong></td>
            {eventDetails.prices.map((price, index) => (
              <td key={`non-dit-${index}`}>{price.priceNonDit}</td>
            ))}
          </tr>
        </tbody>
      </table>
            </div>

            <button className="register-btn">Register Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualEvent;
