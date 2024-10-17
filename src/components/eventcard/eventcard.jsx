import './eventcard.css';
import image from './cs.png';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ eventName, eventDate, posterUrl, eventDetails }) => {
  const navigate = useNavigate();
  console.log(eventDetails);

  const navigateToEvent = () => {
    navigate('/event-details', { state: eventDetails });
  };

  return (
    <div className="event-card" onClick={navigateToEvent}>
      <img
        src={posterUrl != 'String' ? posterUrl : image}
        alt={eventName}
        className="event-poster"
      />
      <div className="event-details">
        <h2>{eventName}</h2>
        <p>{eventDate}</p>
      </div>
    </div>
  );
};

export default EventCard;