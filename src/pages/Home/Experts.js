import React from "react";
import "./Experts.css";
import { Link } from "react-router-dom";
import member1 from "../../image/member-1.jpg";
import member2 from "../../image/member-2.jpg";
import member3 from "../../image/member-3.jpg";
import Expertcom from "../../components/Expertcom";
const Experts = () => {
  const doctors = [
    {
      image: member1,
      name: "BERNICE RAY",
      speciality: "Chief surgeon",
      username: "bernice-ray",
    },
    {
      image: member2,
      name: "LARISSA THOMAS",
      speciality: "Otolaryngology",
      username: "larissa-thomas",
    },
    {
      image: member3,
      name: "JASON BOLTON",
      speciality: "Neurosurgery",
      username: "jason-bolton",
    },
  ];
  return (
    <div className="expert block">
      <h1 style={{ textAlign: "center", fontSize: "40px", color: "#184f68" }}>
        MEET OUR EXPERTS
      </h1>
      <p style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <Expertcom doctors={doctors} />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/our-doctor" className="link">
          meet our experts
        </Link>
      </div>
    </div>
  );
};

export default Experts;
