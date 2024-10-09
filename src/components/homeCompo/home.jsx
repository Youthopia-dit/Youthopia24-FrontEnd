import "./home.css";
import youthopia from "../../assets/youthopia.svg";
import Timer from "../homeTimer/Timer";
// import Sponser from "../sponsers/sponsers";
// import EventAndPrev from "../eventAndPrev/eventAndPrev";

function Home() {
  return (
    <div className="home">
      <div className="main-page">
        <img src={youthopia} className="youthopiaLogo"></img>
        <Timer />
      </div>
    </div>
  );
}

export default Home;
