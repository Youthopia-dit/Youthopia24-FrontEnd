import './EventCard.css'; // Import the CSS file



function EventCard1(props) {
    const openEventPage = () => {
        window.location.href = props.eventLink; // Link passed as a prop
    };

    return (
        <div className='eventcontent'>
            <img 
                src={props.imageSrc} 
                alt={props.imageAlt} 
                width={250} 
                height={200} 
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />
            <p>Event Name: <br />{props.eventName}</p>
            <p>Date: {props.eventDate}</p>
        </div>
    );
}
function EventCard2(props) {
    const openEventPage = () => {
        window.location.href = props.eventLink; // Link passed as a prop
    };

    return (
        <div className='eventcontent'>
            <img 
                src={props.imageSrc} 
                alt={props.imageAlt} 
                width={250} 
                height={200} 
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />
            <p>Event Name: <br />{props.eventName}</p>
            <p>Date: {props.eventDate}</p>
        </div>
    );
}
function EventCard3(props) {
    const openEventPage = () => {
        window.location.href = props.eventLink; // Link passed as a prop
    };

    return (
        <div className='eventcontent'>
            <img 
                src={props.imageSrc} 
                alt={props.imageAlt} 
                width={250} 
                height={200} 
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />
            <p>Event Name: <br />{props.eventName}</p>
            <p>Date: {props.eventDate}</p>
        </div>
    );
}




export { EventCard1, EventCard2, EventCard3 };

