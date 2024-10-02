import './EventCard.css'; // Import the CSS file

function EventCard({ imageSrc, imageAlt, eventName, eventDate, eventLink }) {
    const openEventPage = () => {
        window.location.href = eventLink; // Link passed as a prop
    };

    return (
        <div className='eventcontent'>
            <img
                src={imageSrc}
                alt={imageAlt}
                width={250}
                height={200}
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />
            <p>Event Name: <br />{eventName}</p>
            <p>Date: {eventDate}</p>
        </div>
    );
}

export default EventCard;
