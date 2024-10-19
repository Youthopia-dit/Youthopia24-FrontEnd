import React, { useEffect, useState } from 'react';
import './Eventpage1.css';
import EventCard from '../../components/eventcard/eventcard';
import { useEvents } from '../../store/events'

import TechBack from '../../assets/tech_back.png';

const EventPage = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const { events, fetchEvents } = useEvents();

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {

  }, [events]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const eventTypes = {
    Technical: events.filter(event => event.category === 'tech'),
    Cultural: events.filter(event => event.category === 'cul'),
    Informal: events.filter(event => event.category === 'inf'),
  };

  const renderContent = () => {
    const events = eventTypes[activeTab];
    return (
      <div className="parents">
        {events.map((event, index) => (
          <EventCard
            key={index}
            posterUrl={event.event_poster}
            eventName={event.event_name}
            eventDate={event.date}
            eventDetails={event}
          />
        ))}
      </div>
    );
  };



  return (
    <div className="events-list-page">
      <div className="event-page-background">
      {/* <div className="background-wrapper">
        <img src={TechBack} alt="Background" className="background-image" />
        <div className="gradient-overlay"></div>
      </div> */}
      </div>
      <div className="clubs">
        <div className="tab-buttons">
          <button onClick={() => handleTabChange('Technical')}>Technical</button>
          <button onClick={() => handleTabChange('Cultural')}>Cultural</button>
          <button onClick={() => handleTabChange('Informal')}>Informal</button>
        </div>
        <div className="event-tab-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
