import "./home.css";
import youthopia from "../../assets/youthopia.svg";
import Timer from "../homeTimer/timer";
import Sponser from "../sponsers/sponsers";

function Home() {
  return (
    <div className="home">
      <div className="main-page">
        <div>
          <img src={youthopia} className="youthopiaLogo"></img>
        </div>
        <Timer />
      </div>
      <Sponser/>
    </div>
  );
}

export default Home;
