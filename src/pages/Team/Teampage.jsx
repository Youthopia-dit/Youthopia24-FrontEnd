import React from 'react';
import './Teampage.css'; // Import the CSS file
import TeamCard from '../../components/teamcard/teamcard'; // Import the TeamCard component
import teamData from './teamlist.json'; // Import the JSON file

const TeamPage = () => {
  return (
    <div className="team-page">
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
  );
};

export default TeamPage;
