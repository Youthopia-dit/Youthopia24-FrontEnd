import "./eventAndPrev.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";

function eventAndPrev() {
  return (
    <div className="events-page">
      <div className="events-category">
        <h1 style={{ textTransform: "uppercase" }}>
          Events Category
        </h1>
        <div className="event-cards">
          <div className="event-card">
            <img src={img1} alt="Event 1" />
            <p>Event 1 Description</p>
          </div>
          <div className="event-card">
            <img src={img2} alt="Event 2" />
            <p>Event 2 Description</p>
          </div>
          <div className="event-card">
            <img src={img3} alt="Event 3" />
            <p>Event 3 Description</p>
          </div>
        </div>
      </div>

      <div className="events-category">
        <h1 style={{ textTransform: "uppercase" }}>
          Previous Years Glimpse
        </h1>
        <div className="event-cards">
          <div className="event-card">
            <img src={img1} alt="Glimpse 1" />
            <p>Glimpse 1 Description</p>
          </div>
          <div className="event-card">
            <img src={img2} alt="Glimpse 2" />
            <p>Glimpse 2 Description</p>
          </div>
          <div className="event-card">
            <img src={img3} alt="Glimpse 3" />
            <p>Glimpse 3 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventAndPrev;