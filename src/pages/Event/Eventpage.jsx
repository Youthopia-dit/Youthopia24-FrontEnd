import React, { useState } from 'react';
import './Eventpage.css';
import EventCard from '../../components/eventcard/eventcard';
import BGImage1 from '../../../src/assets/Events-Elements/Group 62.png';
import BGImage2 from '../../../src/assets/Events-Elements/Group 63.png';

function Eventpage(props) {
    const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab

    const createEvent = (category, index) => ({
        imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
        imageAlt: `${category} Event ${index + 1}`,
        eventName: `${category} Event ${index + 1}`,
        eventDate: index % 2 === 0 ? "12th October 2024" : "13th October 2024",
        eventLink: index % 2 === 0 ? "https://youthopia.dituniversity.co.in/#/events" : "https://example.com",
    });

    const eventTypes = {
        Technical: Array.from({ length: 6 }, (_, index) => createEvent("Technical", index)),
        Cultural: Array.from({ length: 6 }, (_, index) => createEvent("Cultural", index)),
        Informal: Array.from({ length: 6 }, (_, index) => createEvent("Informal", index)),
    };

    // Function to render content dynamically based on active tab
    const renderContent = () => {
        const events = eventTypes[activeTab];

        return (
            <div className='parents'>
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
        <body>





            <div className='events'>
                <header>EVENTS {props.name}</header>
                <p>These are our Events.</p>
                <button>Register now</button>


                <main className='clubs'>
                    {/* Buttons for tabs */}
                    <div className='tab-buttons'>
                        {Object.keys(eventTypes).map((tab) => (
                            <button
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                                disabled={activeTab === tab} // Disable button for active tab
                                aria-label={`Show ${tab} events`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>



                    {/* Content based on the active tab */}
                    <div className='tab-content'>
                        {renderContent()}
                    </div>
                </main>
            </div>
        </body >

    );
}

export default Eventpage;
