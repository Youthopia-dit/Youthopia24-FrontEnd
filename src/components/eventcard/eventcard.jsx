import './EventCard.css'; // Import the CSS file

function EventCard1() {
    const openEventPage = () => {
        window.location.href = "https://youthopia.dituniversity.co.in/#/events"; // Random YouTube link
      };
    return (
        <li>
           <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
                onClick={openEventPage}  // React onClick event handler
                style={{ cursor: "pointer" }}  // Optional: add pointer cursor
            />
            <p>Event Name: <br />Technical Event 1 Date:</p>
            

           <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
            />
            <p>Event Name: <br />Technical Event 2 Date:</p>

            <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
            />
            <p>Event Name: <br />Technical Event 3 Date:</p>
            
        </li>
    );
}
function EventCard2() {
    return (
        <li>
        <img 
            src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
            alt="event images loading..." 
            width={250} 
            height={200} 
        />
        <p>Event Name: <br />Cultural Event 1 Date:</p>

        <img 
            src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
            alt="event images loading..." 
            width={250} 
            height={200} 
        />
        <p>Event Name: <br />Cultural Event 2 Date:</p>

        <img 
            src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
            alt="event images loading..." 
            width={250} 
            height={200} 
        />
        <p>Event Name: <br />Cultural Event 3 Date:</p>
    </li>


    );
}
    function EventCard3() {
        return (
            <li>
            <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
            />
            <p>Event Name: <br />Informal Event 1 Date:</p>
    
            <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
            />
            <p>Event Name: <br />Informal Event 2 Date:</p>

            <img 
                src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_1280.png" 
                alt="event images loading..." 
                width={250} 
                height={200} 
            />
            <p>Event Name: <br />Informal Event 3 Date:</p>
        </li>
    
    
        );

}



export { EventCard1, EventCard2, EventCard3 };

