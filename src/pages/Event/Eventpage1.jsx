import React, { useEffect, useState } from 'react';
import './Eventpage1.css';
import img from '../../assets/img.png';
import img1 from '../../assets/Gradient_3.png';
import img2 from '../../assets/Gradient_1.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/Gradient_2.png';
import EventCard from '../../components/eventcard/eventcard';
import bgevent from '../../../src/assets/bgevent.png'; // Top part
import Youthopia from '../../assets/youthopia-logo.png';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/navbar';
import { useEvents } from '../../store/events';

function EventPage(props) {
  const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab
  const { events, fetchEvents } = useEvents();
  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    console.log(events);
  }, [events]);
  // Function to create sample events
  const createEvent = (category, index) => ({
    imageSrc: img,
    imageAlt: `${category} Event ${index + 1}`,
    eventName: `${category} Event ${index + 1}`,
    eventDate: index % 2 === 0 ? '12th October 2024' : '13th October 2024',
    eventLink:
      index % 2 === 0
        ? 'https://youthopia.dituniversity.co.in/#/events'
        : 'https://example.com',
  });

  // Event data categorized by type
  // const eventTypes = {
  //   Technical: Array.from({ length: 12 }, (_, index) => createEvent('Technical', index)),
  //   Cultural: Array.from({ length: 12 }, (_, index) => createEvent('Cultural', index)),
  //   Informal: Array.from({ length: 12 }, (_, index) => createEvent('Informal', index)),
  // };
  const eventTypes = {
    Technical: events.filter((event) => event.category === 'tech'),
    Cultural: events.filter((event) => event.category === 'Cultural'),
    Informal: events.filter((event) => event.category === 'Informal'),
  };

  // Function to render event cards based on the active tab
  const renderContent = () => {
    const events = eventTypes[activeTab];
    return (
      <div className="parents">
        {events.map((event, index) => (
          <EventCard
            key={index}
            posterUrl={event.event_poster}
            // imageAlt={event.imageAlt}
            eventName={event.event_name}
            eventDate={event.date}
            eventDetails={event}
            // eventLink={event.eventLink}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="elements">
        <div className="bgelemets">
          <img src={img1} alt="bg1" id="bg1" className="bg1" />
          <img src={img2} alt="bg2" id="bg2" className="bg2" />
          <img src={img3} alt="bg3" id="bg3" className="bg3" />
          <img src={img4} alt="bg4" id="bg4" className="bg4" />

          <div className="events-page">
            {/* Background Images */}
            <div className="background">
              <img src={bgevent} alt="Background Top" className="background" />
            </div>

            <div className="events">
              <img src={Youthopia} alt="logo" className="youthopia-logo"></img>
              <header>EVENTS {props.name}</header>
              <p>These are our main Events.</p>

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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
