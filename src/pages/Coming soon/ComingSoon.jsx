import React from "react";
import './ComingSoon.css';
import centerElement from '../../assets/center-element-full.png'
import DIT from '../../assets/ditu-full.png'
import Youthopia from '../../assets/youthopia-logo.png'
import Timer from '../../components/homeTimer/Timer'
import bg1 from '../../assets/Bg-Elements/bg1.png';  
import bg2 from '../../assets/Bg-Elements/bg2.png';  
import bg3 from '../../assets/Bg-Elements/bg3.png';  
import bg4 from '../../assets/Bg-Elements/bg4.png';  



function ComingSoon() {
    return (
        <div className="Background">
            <div className="Background-elements">
                <img src={bg1} alt="bg1-element" id="bg1" />
                <img src={bg2} alt="bg2-element" id="bg2" />
                <img src={bg3} alt="bg3-element" id="bg3" />
                <img src={bg4} alt="bg4-element" id="bg4" />
           
        <div className="coming-soon">
            <div className="coming-soon-content">
                <img src={DIT} alt="DIT University" className="dit-logo" />
                <div className="presents-text">
                    Presents
                </div>
                <div className="logo-image">
                    <img src={Youthopia} className="coming-soon-youthopia"></img>
                    <img src={Youthopia} className="coming-soon-youthopia-blur"></img>
                </div>
                <Timer />
            </div>
            <img src={centerElement} alt="center element" className="center-element" />
        </div>
        </div>
        </div>
    )
}
export default ComingSoon