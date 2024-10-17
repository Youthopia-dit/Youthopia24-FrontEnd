import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create the context
const EventContext = createContext();

// Provider component
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    // Function to call the API
    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://192.168.30.14:3001/api/events');
            console.log(response.data.events)
            setEvents(response.data.events);
            console.log(events)

        } catch (error) {
            console.error('Failed to fetch events:', error);
            setEvents([]);
        }

    };
    useEffect(() => {
        console.log(events)
    }, [events])

    return (
        <EventContext.Provider value={{ events, fetchEvents }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use the event context
export const useEvents = () => useContext(EventContext);