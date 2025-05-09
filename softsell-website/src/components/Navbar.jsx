import React from "react";
import { Link } from "react-scroll";
import { FaChartLine } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-content">
        {/* Logo & Company Name */}
        <ul className="nav-links">
          <li>
            <div className="logo-container">
              <FaChartLine className="logo-icon" />
              <span style={{ paddingRight: "10px" }} className="company-name">
                SoftSell Marketing
              </span>
            </div>
          </li>
          <li><Link to="hero" smooth={true} duration={800} className="nav-link">About</Link></li>
          <li><Link to="how-it-works" smooth={true} duration={800} className="nav-link">How It Works</Link></li>
          <li><Link to="why-choose-us" smooth={true} duration={800} className="nav-link">Why Choose Us</Link></li>
          <li><Link to="testimonials" smooth={true} duration={800} className="nav-link">Testimonials</Link></li>
          <li><Link to="contact" smooth={true} duration={800} className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;