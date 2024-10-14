import React, { useState } from 'react';
import './Eventpage1.css';
import EventCard from '../../components/eventcard/eventcard';
import BGImage1 from '../../../src/assets/Events-Elements/Group 62.png'; // Top part
import BGImage2 from '../../../src/assets/Events-Elements/Group 63.png'; // Bottom part

function Eventpage(props) {
  const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab

  // Function to create sample events
  const createEvent = (category, index) => ({
    imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
    imageAlt: `${category} Event ${index + 1}`,
    eventName: `${category} Event ${index + 1}`,
    eventDate: index % 2 === 0 ? "12th October 2024" : "13th October 2024",
    eventLink: index % 2 === 0 ? "https://youthopia.dituniversity.co.in/#/events" : "https://example.com",
  });

  // Event data categorized by type
  const eventTypes = {
    Technical: Array.from({ length: 6 }, (_, index) => createEvent('Technical', index)),
    Cultural: Array.from({ length: 6 }, (_, index) => createEvent('Cultural', index)),
    Informal: Array.from({ length: 6 }, (_, index) => createEvent('Informal', index)),
  };

  // Function to render event cards based on the active tab
  const renderContent = () => {
    const events = eventTypes[activeTab];
    return (
      <div className="parents">
        {events.map((event, index) => (
          <EventCard
            key={index}
            imageSrc={event.imageSrc}
            imageAlt={event.imageAlt}
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventLink={event.eventLink}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="events-page">
      {/* Background Images */}
      <div className="background">
        <img src={BGImage1} alt="Background Top" className="background-top" />
        <img src={BGImage2} alt="Background Bottom" className="background-bottom" />
      </div>

      <div className="events">
        <header>EVENTS {props.name}</header>
        <p>These are our Events.</p>
        <button className="register-button">Register now</button>

        <main className="clubs">
          {/* Tab Buttons */}
          <div className="tab-buttons">
            {Object.keys(eventTypes).map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
                disabled={activeTab === tab}
                aria-label={`Show ${tab} events`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Event Cards Content */}
          <div className="tab-content">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default Eventpage;
