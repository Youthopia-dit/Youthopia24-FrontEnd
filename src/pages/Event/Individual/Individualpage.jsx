import React, { useState } from "react";
import "./Individualpage.css";
import Navbar from "../../../components/Navbar/navbar";
import { useLocation } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import TechBack from "../../../assets/Events-Elements/tech_back.png";
import CulturalBack from "../../../assets/Events-Elements/image 397.png";
import InformalBack from "../../../assets/Events-Elements/informal_back.png";

const IndividualEvent = () => {
  const location = useLocation();
  const eventDetails = location.state || {};

  const [activeTab, setActiveTab] = useState("description");

  if (!eventDetails) return <p>Event details not found</p>;

  const teamSizes = eventDetails.prices.map((price) => price.teamSize);

  // Function to render the background based on the event category
  const renderBack = () => {
    if (eventDetails.category === "tech") {
      return (
        <div className="background-wrapper">
          <img src={TechBack} alt="Tech background" className="tech-back-image" />
          <div className="gradient-overlay"></div>
        </div>
      );
    } else if (eventDetails.category === "cul") {
      return (
        <div className="background-wrapper">
          <img src={CulturalBack} alt="Cultural background" className="cultural-back-image" />
          <div className="gradient-overlay2"></div>
        </div>
      );
    } else if (eventDetails.category === "inf") {
      return (
        <div className="background-wrapper">
          <img src={InformalBack} alt="Informal background" className="informal-back-image" />
          <div className="gradient-overlay"></div>
        </div>
      );
    }
  };

  return (
    <>
    <Navbar />
      <div className="individual-event">
        {renderBack()}

        <div className="event-container">
          <div className="event-poster">
            <img src={eventDetails.event_poster} alt="event-poster" />
          </div>
          <div className="event-detail">
            <h2 className="event-title">{eventDetails.event_name}</h2>
            <div className="event-info">
              <span className="event-data">
                {eventDetails.venue} • {eventDetails.date} •{" "}
                {eventDetails.start_time} - {eventDetails.end_time}
              </span>
            </div>

            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button
                onClick={() => setActiveTab("description")}
                className={activeTab === "description" ? "active-tab" : ""}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("rules")}
                className={activeTab === "rules" ? "active-tab" : ""}
              >
                Rules
              </button>
              <button
                onClick={() => setActiveTab("coordinators")}
                className={activeTab === "coordinators" ? "active-tab" : ""}
              >
                Coordinators
              </button>
              <button
                onClick={() => setActiveTab("fees")}
                className={activeTab === "fees" ? "active-tab" : ""}
              >
                Fees
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "description" && (
                <>
                <div className="event-desc">
                  {eventDetails.event_description}
                  <br />
                  <br />
                  Minimum Participants: {eventDetails.participant_min} <br />
                  Maximum Participants: {eventDetails.participant_max}
                </div>
                <div className="participants">
                  
                </div>
                </>
              )}

              {activeTab === "rules" && (
                <div className="event-desc">
                  <ul className="event-rule-list">
                    {eventDetails.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "coordinators" && (
                <div className="event-coor-list">
                  <>
                    <div className="event-coor-list">
                      <strong className="tablehead">Event Coordinators:</strong>
                      <table className="event-coor-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(eventDetails.coordinator).map(
                            ([name, number]) => (
                              <tr key={name}>
                                <td>
                                  <strong>{name}</strong>
                                </td>
                                <td>{number}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>

                      <strong className="tablehead">Event Heads:</strong>
                      <table className="event-head-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(eventDetails.overall_head).map(
                            ([name, number]) => (
                              <tr key={name}>
                                <td>
                                  <strong>{name}</strong>
                                </td>
                                <td>{number}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                </div>
              )}

              {activeTab === "fees" && (
                <div className="event-section">
                  <strong>Fees:</strong> <span>{eventDetails.fees}</span>
                  <table className="fees-table">
                    <thead>
                      <tr>
                        <th></th>
                        {teamSizes.map((size) => (
                          <th key={size}>Team Size {size}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>DIT</strong>
                        </td>
                        {eventDetails.prices.map((price, index) => (
                          <td key={`dit-${index}`}>{price.priceDit}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>
                          <strong>Non DIT</strong>
                        </td>
                        {eventDetails.prices.map((price, index) => (
                          <td key={`non-dit-${index}`}>{price.priceNonDit}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <button className="register-btn" disabled="true" >Register Now</button>
            <h3>Registration Opening Soon</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualEvent;
