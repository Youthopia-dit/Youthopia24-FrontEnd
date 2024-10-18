import React from 'react';
import './Teampage.css'; // Import the CSS file
import TeamCard from '../../components/teamcard/teamcard'; // Import the TeamCard component
import teamData from './teamlist.json'; // Import the JSON file
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';

const TeamPage = () => {
  return (
<>
<Navbar />
    <div className="team-page">
      
      <div className="background-div">
        <img className='ImgLeftCorner' src={imgLC}></img>
        <img className='imageLeft' src={imgL}></img>
        <img className='imageRight' src={imgR}></img>
      </div>
      <div className="team-page-content">
      {Object.keys(teamData).map((sectionTitle) => (
        <div key={sectionTitle} className="team-section">
          <h1 className="section-title">{sectionTitle}</h1>
          <div className="team-container">
            {Object.entries(teamData[sectionTitle]).map(([name, details]) => (
              <TeamCard
                key={name}
                name={name}
                phone={details.phone}
                image={details.image}
                course={details.course}
              />
            ))}
          </div>
        </div>
      ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default TeamPage;
