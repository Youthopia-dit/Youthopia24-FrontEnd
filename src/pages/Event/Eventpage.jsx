import React, { useEffect, useState } from 'react';
import './Eventpage.css';
import img from '../../assets/img.png';
import EventCard from '../../components/eventcard/eventcard';
import { useEvents } from '../../store/events';

function Eventpage(props) {
    const [activeTab, setActiveTab] = useState('tech');
    const [loading, setLoading] = useState(true);  // Initial loading state
    const { events, fetchEvents } = useEvents();

    useEffect(() => {
        const loadData = async () => {
            try {
                await fetchEvents();
            } finally {
                setLoading(false);  // Set loading to false regardless of success or failure
            }
        };
        loadData();
    }, []);

    // Mapping of categories to filter events by category
    const eventTypes = {
        tech: events.filter(event => event.category === 'Technical'),
        cult: events.filter(event => event.category === 'Cultural'),
        inf: events.filter(event => event.category === 'Informal'),
    };

    const renderContent = () => {
        const filteredEvents = eventTypes[activeTab] || [];
        return (
            <div className="parents">
                {filteredEvents.map((event, index) => (
                    <EventCard
                        key={index}
                        imageSrc={event.imageSrc || img}
                        imageAlt={event.imageAlt}
                        eventName={event.eventName}
                        eventDate={event.eventDate}
                        eventLink={event.eventLink}
                    />
                ))}
            </div>
        );
    };

    if (loading) {
        return <div>Loading events...</div>;  // Or any other loading indicator
    }

    return (
        <>
            <div className='events-page'>
                {/* Omitting some elements for brevity */}
                <main className="clubs">
                    <div className="tab-buttons">
                        {Object.keys(eventTypes).map(tab => (
                            <button
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                                disabled={activeTab === tab}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">{renderContent()}</div>
                </main>
            </div>
            {/* Footer component */}
        </>
    );
}

export default Eventpage;
