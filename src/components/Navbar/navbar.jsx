import "./navbar.css";
import DIT from "../../assets/ditu-full.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links right-link">
                <li><Link to="/comingsoon">Events</Link></li>
                <li><Link to="/comingsoon">Our Team</Link></li>
            </ul>
            <div className="logo">
                <img src={DIT} alt="DIT University Logo" />
            </div>
            <ul className="navbar-links left-link">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/comingsoon">Sign In</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;