import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import footerlogo from "../../image/footer-logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = ({ show }) => {
  return (
    <div className="footer" style={{ marginTop: "0px" }}>
      {show ? (
        <div
          style={{
            background: "#00bcbd",
            color: "#fff",
            fontSize: "24px",
            paddingBlock: "20px",
            marginTop: "0px",
          }}
        >
          <div className="footer1 block">
            <div>
              <Link to="/">
                <img src={footerlogo}></img>
              </Link>
              <p>
                Evening over without above be won't yielding days man, there.
                She'd man you female stars life darkness
              </p>
            </div>
            <div className="style1">
              <h3>
                <FaMapMarkerAlt /> 27th Avenue, New York, W2 3XE, US
              </h3>
              <h3>
                <a href="tel:5612231234">
                  <FaPhoneAlt /> (561) 223-1234
                </a>
              </h3>
              <h3>
                <a href="maito:contact@healthcare.com">
                  <FaEnvelope /> contact@healthcare.com
                </a>
              </h3>
            </div>
            <div>
              <h3>
                <Link to="/">
                  <FaFacebook /> facbook
                </Link>
              </h3>
              <h3>
                <Link to="/">
                  <FaTwitter /> twitter
                </Link>
              </h3>
              <h3>
                <Link to="/">
                  <FaYoutube /> youtube
                </Link>
              </h3>
            </div>
          </div>
        </div>
      ) : null}
      <div style={{ background: "#00b1b2", margin: "0", padding: "50px" }}>
        <div className="footer2 block">
          <div className="subfooter">
            <ul className="flex2">
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/our-doctor">Our Doctors</NavLink>
              </li>
              <li>
                <NavLink to="/find-doctor">Find a Doctor</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/location">Location</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li>
                <Link to="/">Online Bill</Link>
              </li>
              <li>
                <Link to="/">Patient Info</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>&copy; ALL RIGHTS RESERVED | PRIVACY POLICY</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
