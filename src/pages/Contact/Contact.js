import React from "react";
import { useEffect, useState } from "react";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/location-banner.jpg";
import "./contact.css";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";
const Contact = ({ setShow }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  setShow(false);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });
  const handlename = (name) => {
    if (!name) {
      return "First name should not be empty.";
    } else if (name.match(/^[a-zA-Z ]+$/) == null) {
      return "First name should only contain alphabets.";
    }
  };
  const handlephone = (phone) => {
    if (!phone) return "please enter your phone number";
    else if (
      !phone.match(/^[0-9]+$/) ||
      phone.length !== 10 ||
      !phone.match(/^[6789]/)
    )
      return "enter valid phone number";
  };
  const handletextarea = (textarea) => {
    if (!textarea) return "please enter your comments";
  };
  const handleemail = (email) => {
    if (!email) {
      return "Please enter your email.";
    } else if (
      email.match(/\S+@\S+\.\S+/) == null ||
      email.match(/\S+@gmail.com/) == null
    ) {
      return "enter valid email";
    }
  };
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const validate = (e) => {
    e.preventDefault();

    console.log("abhay");
    if (handlename(formdata.name)) toast.warning(handlename(formdata.name));
    else if (handlephone(formdata.phone))
      toast.warning(handlephone(formdata.phone));
    else if (handleemail(formdata.email))
      toast.warning(handleemail(formdata.email));
    else if (handletextarea(formdata.textarea))
      toast.warning(handletextarea(formdata.textarea));

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formdata,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => toast.success("success"))
      .catch(() => toast.error("error"));
  };

  return (
    <div>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
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
          <form
            action="#"
            className="contactform"
            onSubmit={validate}
            noValidate
            autoComplete="off"
          >
            <input
              type="text"
              placeholder="Your Name*"
              required
              name="name"
              value={formdata.name}
              onChange={handlechange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              required
              value={formdata.phone}
              onChange={handlechange}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              name="email"
              value={formdata.email}
              onChange={handlechange}
            />
            <textarea
              cols="30"
              rows="10"
              name="textarea"
              placeholder="How May We Help You?"
              value={formdata.textarea}
              onChange={handlechange}
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
