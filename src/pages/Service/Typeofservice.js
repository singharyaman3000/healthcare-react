import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { FaRegQuestionCircle } from "react-icons/fa";
const services = [
  {
    id: 1,
    name: "24/7 Emergency Care",
  },
  {
    id: 2,
    name: "Primary Care",
  },
  {
    id: 3,
    name: " Neurology & Sleep Medicine",
  },
  {
    id: 4,
    name: "Ophthamology",
  },
  {
    id: 5,
    name: "Cardiology",
  },
  {
    id: 6,
    name: "Home Care Services",
  },
  {
    id: 7,
    name: "Behavioral & Mental Health",
  },
  {
    id: 8,
    name: "Diagnostic Imaging",
  },
  {
    id: 9,
    name: "Physical Therapy & Rehabilitation",
  },
  {
    id: 10,
    name: "Orthopedics",
  },
  {
    id: 11,
    name: "Surgical Services",
  },
  {
    id: 12,
    name: "Wound Care & Hyperbaric Medicine",
  },
];
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
          {services.map((service, index) => (
            <div key={index}>
              <div>
                <Link to={`/service/${service.id}`}>{service.name}</Link>
              </div>
            </div>
          ))}
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
export { services };
export default Typeofservice;
