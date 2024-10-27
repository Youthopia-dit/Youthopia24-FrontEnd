import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import properties from '../properties.json'

// Create the context
const EventContext = createContext();
const baseUrl = properties.base_url;
// Provider component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Function to call the API
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/events`);
      setEvents(response.data.events);
    } catch (error) {
      console.error('Failed to fetch events:', error);
      setEvents([]);
    }
  };
  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <EventContext.Provider value={{ events, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the event context
export const useEvents = () => useContext(EventContext);
