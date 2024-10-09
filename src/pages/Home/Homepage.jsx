import youthopia from "../../assets/youthopia.svg";
import Timer from "../../components/homeTimer/Timer";
// import Sponser from "../sponsers/sponsers";
// import EventAndPrev from "../eventAndPrev/eventAndPrev";
import './Homepage.css';

function HomePage() {
  return (
    <div className="home">
      <div className="main-page">
        <img src={youthopia} className="youthopiaLogo"></img>
        <Timer />
      </div>
    </div>
  );
}

export default HomePage;
