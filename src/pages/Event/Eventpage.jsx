import React, { useState } from 'react';
import './Eventpage.css';
import { EventCard1, EventCard2, EventCard3}  from '../../components/eventcard/eventcard';

function Eventpage(props) {
    const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab

    // Define event data in an array
    const technicalEvents = [
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 1",
            eventName: "Technical Event 1",
            eventDate: "12th October 2024",
            eventLink: "https://youthopia.dituniversity.co.in/#/events"
        },
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 2",
            eventName: "Technical Event 2",
            eventDate: "13th October 2024",
            eventLink: "https://example.com"
        },
        // Add more events as needed...
    ];
    const culturalEvents = [
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 1",
            eventName: "cultural Event 1",
            eventDate: "12th October 2024",
            eventLink: "https://youthopia.dituniversity.co.in/#/events"
        },
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 2",
            eventName: "cultural Event 2",
            eventDate: "13th October 2024",
            eventLink: "https://example.com"
        },
        // Add more events as needed...
    ];
    const informalEvents = [
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 1",
            eventName: "informal Event 1",
            eventDate: "12th October 2024",
            eventLink: "https://youthopia.dituniversity.co.in/#/events"
        },
        {
            imageSrc: "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png",
            imageAlt: "Event 2",
            eventName: "informal Event 2",
            eventDate: "13th October 2024",
            eventLink: "https://example.com"
        },
    ];


    // Render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'Technical':
                return (
                    <div className='parents'>
                        {technicalEvents.map((event, index) => (
                            <EventCard1
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

            case 'Cultural':
                return (
                    <div className='parents'>
                        {culturalEvents.map((event, index) => (
                            <EventCard2
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
            case 'Informal':
                return (
                    <div className='parents'>
                    {informalEvents.map((event, index) => (
                        <EventCard3
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

            default:
                return null;
        }
    };


    return (
        <div className='events'>
            <header>EVENTS {props.name}</header>
            <p>This is a paragraph right below the header.</p>
            <button>Register now</button>


            <main className='clubs'>
                {/* Buttons for tabs */}

                <div className='tab-buttons'>
                    <button
                        className={activeTab === 'Technical' ? 'active' : ''}
                        onClick={() => setActiveTab('Technical')}>
                        Technical
                    </button>
                    <button
                        className={activeTab === 'Cultural' ? 'active' : ''}
                        onClick={() => setActiveTab('Cultural')}>
                        Cultural
                    </button>
                    <button
                        className={activeTab === 'Informal' ? 'active' : ''}
                        onClick={() => setActiveTab('Informal')}>
                        Informal
                    </button>
                </div>

                {/* Content based on the active tab */}
                <div className='tab-content'>
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

export default Eventpage;
