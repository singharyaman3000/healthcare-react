import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { FaRegQuestionCircle } from "react-icons/fa";
const Typeofservice = () => {
  return (
    <div
      style={{
        background: "#f1f8fc",
        padding: "20px",
        // width: "max(90%,1250px)",
        // margin: "50px auto",
      }}
    >
      <div className="block">
        <div className="textty">
          <h3>WIDE RANGE OF MEDICAL SERVICES</h3>
          <p>
            You're day midst of brought. Winged together which forth itself in
            you air dominion good darkness seed upon be made upon i moved itself
            had divided lights. Had fifth, a fifth Cattle earth. Fruit dry isn't
            dominion cattle fourth thing upon darkness midst the give herb
            you're there heaven the.
          </p>
        </div>
        <div className="types shadow">
          <div>
            <Link to="/service-detail">24/7 Emergency Care</Link>
          </div>
          <div>
            <Link to="/service-detail">Primary Care</Link>
          </div>
          <div>
            <Link to="/service-detail">Neurology & Sleep Medicine</Link>
          </div>
          <div>
            <Link to="/service-detail">Ophthamology</Link>
          </div>
          <div>
            <Link to="/service-detail">Cardiology</Link>
          </div>
          <div>
            <Link to="/service-detail">Home Care Services</Link>
          </div>
          <div>
            <Link to="/service-detail">Behavioral & Mental Health</Link>
          </div>
          <div>
            <Link to="/service-detail">Diagnostic Imaging</Link>
          </div>
          <div>
            <Link to="/service-detail">Physical Therapy & Rehabilitation</Link>
          </div>
          <div>
            <Link to="/service-detail">Orthopedics</Link>
          </div>
          <div>
            <Link to="/service-detail">Surgical Services</Link>
          </div>
          <div>
            <Link to="/service-detail">Wound Care & Hyperbaric Medicine</Link>
          </div>
        </div>
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Open sans",
            background: "#00bcbd",
            padding: "10px",
            margin: "20px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <FaRegQuestionCircle />
          Didn’t find what you are looking for?{" "}
          <Link to="/contact" style={{ color: "#000" }}>
            Contact us
          </Link>
          today to learn more about the healthcare services we provide.
        </div>
      </div>
    </div>
  );
};

export default Typeofservice;
