import "./navbar.css";
import DIT from "../../assets/ditu-full.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [navOpen, setNavOpen] = useState(false); 

    const toggleNav = () => {
        setNavOpen(!navOpen); 
    };

    return (
        <nav>
            <div className={`navbar ${navOpen ? "show-nav" : ""}`}>
                <ul className="navbar-links right-link">
                    <Link to="/comingsoon" className="noburger"><li onClick={toggleNav}>Events</li></Link>
                    <Link to="/comingsoon" className="noburger"><li onClick={toggleNav}>Our Team</li></Link>
                </ul>
                <div className="logo">
                    <img src={DIT} alt="DIT University Logo" />
                </div>
                <ul className="navbar-links left-link">
                <Link to="/comingsoon" className="hamburger"><li onClick={toggleNav}>Events</li></Link>
                <Link to="/comingsoon" className="hamburger"><li onClick={toggleNav}>Our Team</li></Link>
                    <Link to="/about"><li onClick={toggleNav}>About Us</li></Link>
                    <Link to="/comingsoon"><li onClick={toggleNav}>Sign In</li></Link>
                </ul>

                
                {navOpen && (
                    <button className="nav-button nav-close-button" onClick={toggleNav}>
                        <MdClose size={30} />
                    </button>
                )}
                {!navOpen && (
                <button className="nav-button" onClick={toggleNav}>
                    <GiHamburgerMenu size={30} />
                </button>
            )}
            </div>

            
        </nav>
    );
}

export default Navbar;
