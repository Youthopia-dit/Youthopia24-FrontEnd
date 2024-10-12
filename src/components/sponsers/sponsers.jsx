import "./sponser.css";
import sponser1 from "../../assets/brandlogo1.webp"
import sponser2 from "../../assets/brandlogo2.webp"
import sponser3 from "../../assets/brandlogo3.webp"
import sponser4 from "../../assets/brandlogo4.webp"
import sponser5 from "../../assets/brandlogo5.webp"

function sponser() {
  return (
    <div className="sponse-wrapper">
      <h1>SPONSER</h1>
      <div className="sponser-logo-wrapper">
        <img src={sponser1} alt="sponser 1" className="sponserlogo"></img>
        <img src={sponser2} alt="sponser 2" className="sponserlogo"></img>
        <img src={sponser3} alt="sponser 3" className="sponserlogo"></img>
        <img src={sponser4} alt="sponser 4" className="sponserlogo"></img>
        <img src={sponser5} alt="sponser 5" className="sponserlogo"></img>
      </div>
    </div>
  );
}

export default sponser;
