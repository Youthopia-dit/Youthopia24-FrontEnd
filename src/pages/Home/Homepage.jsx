import './Homepage.css';
import event1 from '../../assets/tech01.png';
import centerElement from '../../assets/center-element-full.png';
import Youthopia from '../../assets/youthopia-logo.png';
import Timer from '../../components/homeTimer/Timer';
import bg1 from '../../assets/Bg-Elements/bg1.png';
import bg2 from '../../assets/Bg-Elements/bgx.png';
import bg3 from '../../assets/Bg-Elements/bg3.png';
import bg4 from '../../assets/Bg-Elements/bg4.png';
import NAAC from '../../assets/NAAC.png';
import Youthopialogo from '../../assets/youthopialogo.png';
import H1 from '../../assets/Gallery/H1.jpg';
import H2 from '../../assets/Gallery/H2.jpg';
import H3 from '../../assets/Gallery/H3.jpg';
import H4 from '../../assets/Gallery/H4.jpg';
import H5 from '../../assets/Gallery/H5.jpg';
import H6 from '../../assets/Gallery/H6.jpg';
import H7 from '../../assets/Gallery/H7.jpg';
import H8 from '../../assets/Gallery/H8.jpg';
import H9 from '../../assets/Gallery/H9.jpg';
import H10 from '../../assets/Gallery/H10.jpg';
import '../../components/card-list/Glimpse';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import DITLOGO from '../../assets/ditlogo.png';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Properties from '../../properties.json';

const imagesCarousel1 = [
  { id: 1, src: H1 },
  { id: 2, src: H2 },
  { id: 3, src: H3 },
];


function Carousel({ images, direction }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clone the images and append them to create a seamless loop
    const container = containerRef.current;
    container.innerHTML += container.innerHTML;
  }, []);

  return (
    <div className="carousel">
      <div className={`image-container ${direction}`} ref={containerRef}>
        {images.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.src} alt={`Event ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Homepage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axios.get(`${Properties.base_url}/api/gethighlights`);
        setEvents(response.data.data);
      } catch (err) {
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };
    fetchHighlights();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Background">
        <div className="Background-elements">
          <img src={bg1} alt="bg1-element" id="bg1" />
          <img src={bg2} alt="bg2-element" id="bg2" />
          <img src={bg3} alt="bg3-element" id="bg3" />
          <img src={bg4} alt="bg4-element" id="bg4" />

          <div className="coming-soon-home">
            <div className="coming-soon-content">
              <div className="DIT-main">
                <img src={DITLOGO} alt="DITlogo" className="DITlogo" />
              </div>
              <div className="logos">
                <img
                  src={Youthopialogo}
                  alt="youthopia"
                  className="youthopia-icon"
                />
                <div className="presents-text">
                  Presents
                  <img src={NAAC} alt="Naaclogo" className="NAAClogo" />
                </div>
              </div>
              <div className="logo-image">
                <img src={Youthopia} className="coming-soon-youthopia"></img>
              </div>
              <div className="presents-text">
                <p className="Desc">Annual Techno-Cultural Fest</p>
              </div>
              <Timer />
              {/* <div className="sponsors-home">
                                <p className="sponsors-text">SPONSORS</p>
                                <div className="sponsors-logos">
                                    <img src={NAAC} alt="Naaclogo" className="Slogo" />
                                    <img src={NAAC} alt="Naaclogo" className="Slogo" />
                                    <img src={NAAC} alt="Naaclogo" className="Slogo" />
                                    <img src={NAAC} alt="Naaclogo" className="Slogo" />
                                </div>
                            </div> */}

              <div className="events-home">
                <p className="events-text"> FLAGSHIP EVENTS</p>
                <div className="events-row-container">
                  <div className="events-row">
                    {loading ? (
                      <p>Loading events...</p>
                    ) : error ? (
                      <p>{error}</p>
                    ) : (
                      events.map((event) => (
                        <div
                          className="events-img"
                          key={event.event_id}
                          onClick={() => {
                            navigate('/event-details', { state: event });
                          }}
                        >
                          <img
                            src={event.event_poster}
                            alt={event.name}
                            className="Elogo"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="presents-text">
                <p className="glimpse"> Glimpse from 2023 </p>
              </div>
              <div className="image-list">
                <Carousel images={imagesCarousel1} direction="left-to-right" />
                {/* <Carousel images={imagesCarousel2} direction="right-to-left" />
                                <Carousel images={imagesCarousel3} direction="left-to-right" /> */}
              </div>
            </div>
            <img
              src={centerElement}
              alt="center element"
              className="center-element"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Homepage;
