import "./navbar.css";
import DIT from "../../assets/ditu-full.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links right-link">
                <li><a href="#events">Events</a></li>
                <li><a href="#team">Our Team</a></li>
            </ul>
            <div className="logo">
                <img src={DIT} alt="DIT University Logo" />
            </div>
            <ul className="navbar-links left-link">
                <li><a href="#about">About Us</a></li>
                <li><a href="#signin">Sign In</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;