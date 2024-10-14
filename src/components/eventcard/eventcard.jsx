import './eventcard.css'; // Import the CSS file


function EventCard({ imageSrc, imageAlt, eventName, eventDate, eventLink, eventDescription }) {
    const openEventPage = () => {
        window.location.href = eventLink; // Link passed as a prop
    };

    return (
      
            
        <div className='eventcontent'>
            {/* Event image */}
            <img
                src={imageSrc}
                alt={imageAlt}
                width={350}
                height={200}
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />

            {/* Event name and date */}
            

            {/* New div for additional details */}
            <div className="event-details">
            <p>Event Name: <br />{eventName}</p>
            <p>Date: {eventDate}</p>
                <p>{eventDescription}</p>
            </div>
        </div>
        
    );
}

export default EventCard;
