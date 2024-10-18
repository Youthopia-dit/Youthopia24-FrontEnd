import './teamcard.css'; 


const TeamCard = ({ name, phone, image, course }) => {
    return (
      <div className="team-card">
        <img src={image} alt={name} className="team-image" />
        <div className="team-details">
          <h2>{name}</h2>
          <p>{course}</p>
          {phone && <p>{phone}</p>}
        </div>
      </div>
    );
  };

export default TeamCard;
