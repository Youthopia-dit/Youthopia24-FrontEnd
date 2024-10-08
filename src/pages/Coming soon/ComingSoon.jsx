import React from "react";
import './ComingSoon.css';
import centerElement from '../../assets/center-element-full.png'
import DIT from '../../assets/ditu-full.png'
import Youthopia from '../../assets/youthopia-logo.png'
// import Timer from '../../components/homeTimer/Timer'

function ComingSoon() {
    return (
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
                {/* <Timer /> */}

            </div>
            <img src={centerElement} alt="center element" className="center-element" />
            <div className="marquee-container">
                <div className="marquee marquee-1">
                    <span className="marquee-text">
                        ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.
                    </span>
                </div>
                <div className="marquee marquee-2">
                    <span className="marquee-text">
                        ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.ComingSoon.
                        </span>
                </div>
            </div>
        </div>
    );
}
export default ComingSoon;