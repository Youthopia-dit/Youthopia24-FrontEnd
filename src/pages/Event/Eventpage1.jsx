import React, { useEffect, useState } from 'react';
import './Eventpage1.css';
import EventCard from '../../components/eventcard/eventcard';
import { useEvents } from '../../store/events'
import Events from '../../assets/youthopia-logo.png';
import TechBack from '../../assets/Events-Elements/tech_back.png';
import CulturalBack from '../../assets/Events-Elements/image 397.png'
import InformalBack from '../../assets/Events-Elements/informal_back.png'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/navbar';

const EventPage = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const { events, fetchEvents } = useEvents();

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const renderBack = () => {
    if (activeTab === 'Technical') {
      return (
        <div className="background-wrapper">
          <img src={TechBack} alt="Tech background" className="tech-back-image" />
          <div className="gradient-overlay"></div>
        </div>
      );
    } else if (activeTab === 'Cultural') {
      return (
        <div className="background-wrapper">
          <img src={CulturalBack} alt="Cultural background" className="cultural-back-image" />
          <div className="gradient-overlay2"></div>
        </div>
      );
    } else if (activeTab === 'Informal') {
      return (
        <div className="background-wrapper">
          <img src={InformalBack} alt="Informal background" className="informal-back-image" />
          <div className="gradient-overlay"></div>
        </div>
      );
    }
  };

  const renderNote = () => {
    if (activeTab === 'Technical') {
      return (
        <p>Fueling Innovation, One Breakthrough at a Time</p>
      );
    } else if (activeTab === 'Cultural') {
      return (
        <p>Unleash the Fun, Beyond Limits and Boundaries</p>
      );
    } else if (activeTab === 'Informal') {
      return (
        <p>Celebrating Art, Music, and Dance in Every Beat</p>
      );
    }
  };
  

  return (
    
    <div className="events-list-page">
      <Navbar /> 
      <div className="event-page-background">
        {renderBack()}
      </div>

      <div className="clubs">
        <div className='top'>
          <img src={Events} alt="Yuthopia logo" />
          <h1>EVENTS</h1>
          {renderNote()}
        </div>

        <div className="tab-buttons">
          <button onClick={() => handleTabChange('Technical')}>TECHNICAL</button>
          <button onClick={() => handleTabChange('Cultural')}>CULTURAL</button>
          <button onClick={() => handleTabChange('Informal')}>INFORMAL</button>
        </div>

        <div className="event-tab-content">
          {renderContent()}
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default EventPage;
