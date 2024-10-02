import "./eventAndPrev.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";

function eventAndPrev() {
  return (
    <div className="events-page">
      <div className="events-category">
        <h1 style={{ textTransform: "uppercase" }}>
          EVENTS
        </h1>
        <div className="event-cards">
          <div className="event-card">
            <img src={img1} alt="Event 1" />
          </div>
          <div className="event-card">
            <img src={img2} alt="Event 2" />
          </div>
          <div className="event-card">
            <img src={img3} alt="Event 3" />
          </div>
        </div>
      </div>

{/* Previous year Glimps */}
      <div className="events-category">
        <h1 style={{ textTransform: "uppercase" }}>
        GLIMPSE FROM 2023
        </h1>
        <div className="event-cards">
          <div className="event-card">
            <img src={img4} alt="Glimpse 1" />
          </div>
          <div className="event-card">
            <img src={img5} alt="Glimpse 2" />
          </div>
          <div className="event-card">
            <img src={img2} alt="Glimpse 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventAndPrev;