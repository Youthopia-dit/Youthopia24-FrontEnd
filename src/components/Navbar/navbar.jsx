import "./navbar.css";
import DIT from "../../assets/ditu-full.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const toogleNav = () => setNavOpen(!navOpen);

    const closeNav = () => setNavClose(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="navbar">
            <button className="nav-button" onClick={toggleNav}>
                {navOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </button>
            <div className={`navbar-links ${navOpen ? "show-nav" : ""}`}>
                <ul className="navbar-link right-link">
                    <Link to="/" className="noburger"><li onClick={toggleNav}>Home</li></Link>
                    <Link to="/events" className="noburger"><li onClick={toggleNav}>Events</li></Link>
                    <Link to="/team" className="noburger"><li onClick={toggleNav}>Our Team</li></Link>
                    <Link to="/gallery" className="noburger"><li onClick={toggleNav}>Gallery</li></Link>
                    <Link to="/about"><li onClick={toggleNav}>About Us</li></Link>
                    <Link to="/getting-started"><li onClick={toggleNav}>Sign In</li></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
