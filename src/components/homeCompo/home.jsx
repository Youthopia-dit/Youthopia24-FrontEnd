import "./home.css"
import youthopia from "../../assets/youthopia.svg";
import Timer from "../homeTimer/timer";

function Home(){
    return(
        <div className="main-page">
            <div><img src = {youthopia} className = "youthopiaLogo"></img></div>
            <Timer/>
        </div>
    )
}

export default Home