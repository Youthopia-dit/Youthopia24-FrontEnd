// Footer.js
import React from 'react';
import './Footer.css';
import DITLogo from "../../assets/Dit-white.png";
import NAAC from "../../assets/NAAC-white.png";
import Campus from "../../assets/campus.png";
import YLogo from "../../assets/youthopialogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <span>FOLLOW US: </span>
                <a href="https://www.instagram.com/dituniversity/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/school/dit-university/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.youtube.com/@dituniversitydehradun" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.facebook.com/DITUniversity.edu/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            <div className="footer-main">
                <div className='footer-top'>
                    <div className="footer-left">
                        <p>📍 DIT University,</p>
                        <p>Mussoorie - Diversion Road, Village Makkawala,</p><p> Dehradun, Uttarakhand - 248009, India</p>
                    </div>
                    <div className="footer-contact">
                        <p>📞 1800121041000</p>
                    </div>
                </div>
                <div className="footer-image">
                    <img src={Campus} alt="Campus" />
                </div>

            </div>
            <div className="footer-bottom">
                <img src={NAAC} alt="Accreditation Logo" className="footer-logo" />
                <div className="design-credit">
                    <p>Design & Developed By Technical Team Youthopia 2024</p>
                </div>
                <img src={YLogo} alt="Youthopia Logo" className="footer-logo" />
                <img src={DITLogo} alt="DIT University Logo" className="footer-logo" />
            </div>

        </footer>
    )
};

export default Footer;
