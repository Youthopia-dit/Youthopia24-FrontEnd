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
            <h2>Event 1 Description</h2>
          </div>
          <div className="event-card">
            <img src={img2} alt="Event 2" />
            <h2>Event 2 Description</h2>
          </div>
          <div className="event-card">
            <img src={img3} alt="Event 3" />
            <h2>Event 3 Description</h2>
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
            <h2>Glimpse 1 Description</h2>
          </div>
          <div className="event-card">
            <img src={img2} alt="Glimpse 2" />
            <h2>Glimpse 2 Description</h2>
          </div>
          <div className="event-card">
            <img src={img3} alt="Glimpse 3" />
            <h2>Glimpse 3 Description</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventAndPrev;