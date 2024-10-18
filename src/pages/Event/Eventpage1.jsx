import React, { useEffect, useState } from 'react';
import './Eventpage1.css';
import EventCard from '../../components/eventcard/eventcard';
import { useEvents } from '../../store/events'

import TechBack from '../../assets/tech_back.png';
import Events from '../../assets/Events-Elements/Group 34452.png'
import CulturalBack from '../../assets/Events-Elements/image 397.png'
import InformalBack from '../../assets/Events-Elements/Mask group.png'


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

  const renderBack = () => {
    if(activeTab === 'Technical') {
      return <>
       <img src={Events} alt="yuthopia and events background" className='Events' />
      <div className="background-wrapper">
          <img src={TechBack} alt="Tech background" className="tech-back-image" />
          <div className="gradient-overlay"></div>
        </div>
      </>;
     } else if (activeTab === 'Cultural') {
        return <>
            <img src={Events} alt="Cultural events background" className="Events" />
            <div className="background-wrapper">
              <img src={CulturalBack} alt="Cultural background" className="cultural-back-image" />
              <div className="gradient-overlay2"></div>
            </div>
          </>;
      } else if (activeTab === 'Informal') {
         return <>
             <img src={Events} alt="Informal events background" className="Events" />
                <div className="background-wrapper">
                  <img src={InformalBack} alt="Informal background" className="informal-back-image" />
                  <div className="gradient-overlay3"></div>
                </div>
              </>;
              


    }
  }

  return (
    <div className="events-list-page">
       

      <div className="event-page-background">
       {renderBack()}
      </div>
     
      <div className="clubs">
        <div className="tab-buttons">
          <button onClick={() => handleTabChange('Technical')}>TECHNICAL</button>
          <button onClick={() => handleTabChange('Cultural')}>CULTURAL</button>
          <button onClick={() => handleTabChange('Informal')}>INFORMAL</button>
        </div>
        <div className="event-tab-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
