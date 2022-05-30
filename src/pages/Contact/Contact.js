import React from "react";
import { useEffect } from "react";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/location-banner.jpg";
import "./contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Contact = ({ setShow }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  setShow(false);
  return (
    <div>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Contact"}
        title={"CONTACT US"}
      />
      <div className="contact block">
        <div
          style={{
            fontSize: "30px",
            textAlign: "center",
            margin: "20px",
            padding: "10px",
            color: "#214e66",
          }}
        >
          <h3>HOW CAN WE HELP YOU TODAY?</h3>
          <p style={{ fontSize: "20px" }}>
            Egestas suspendisse morbi quis pulvinar nam condimentum risus etiam
            blandit aptent curae rutrum feugiat.
          </p>
          <form action="#" className="contactform">
            <input type="text" placeholder="Your Name*" required />
            <input type="text" placeholder="Phone*" required />
            <input type="email" placeholder="Email*" required />
            <textarea
              cols="30"
              rows="10"
              placeholder="How May We Help You?"
            ></textarea>
            <button className="contactbtn">SUBMIT NOW</button>
          </form>
        </div>
        <div
          style={{
            background: "#00bcbd",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div className="subcondiv">
            <FaPhoneAlt className="phone" />
            <div>Call Us Today!</div>
            <h4>
              <a href="/contact">(561) 223-1234</a>
            </h4>
          </div>
          <div className="subcondiv">
            <FaEnvelope className="email" />
            <div>Email Us</div>
            <h4>
              <a href="/contact">info@healthcare.com</a>
            </h4>
          </div>
          <div className="subcondiv">
            <div>Stay Conected With Us</div>
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
