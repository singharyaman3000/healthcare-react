import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaHome, FaPhoneAlt } from "react-icons/fa";
import logo from "../image/logo.png";
import "./Navbar.css";
// import Home from "../pages/Home";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header flex">
      <div className="logo flex">
        <Link to="/">
          <img src={logo} alt="" className="logoimg" />
        </Link>
        <div
          className="toggle"
          onClick={() => {
            setActive(!active);
          }}
        >
          <FaBars />
        </div>
      </div>
      <nav className={`mainnav flex ${active}`}>
        <nav>
          <ul className="flex">
            <li>
              <NavLink to="/service" onClick={() => setActive(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-doctor" onClick={() => setActive(false)}>
                Our Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-doctor" onClick={() => setActive(false)}>
                Find a Doctor
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setActive(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/location" onClick={() => setActive(false)}>
                Location
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => setActive(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" onClick={() => setActive(false)}>
                Career
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="right-nav">
            <ul className="flex">
              <li className="remove">
                <Link to="/">
                  <FaHome />
                </Link>
              </li>
              <li className="remove">|</li>
              <li>
                <Link to="/online-bill" onClick={() => setActive(false)}>
                  Online Bill
                </Link>
              </li>
              <li>
                <Link to="/patient-info" onClick={() => setActive(false)}>
                  Patient Info
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setActive(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="subdivnav remove">
            <a href="tel:5612231234">
              <FaPhoneAlt /> (561)223-1234
            </a>
          </div>
        </nav>
      </nav>
    </div>
  );
};
export default Navbar;
