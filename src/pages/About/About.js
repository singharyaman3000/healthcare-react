import React from "react";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/about-banner.jpg";
import Experts from "../Home/Experts";
import {
  FaBed,
  FaHandPaper,
  FaIdCard,
  FaUserMd,
  FaQuoteLeft,
} from "react-icons/fa";
import ourgoal from "../../image/goal-sec.jpg";
import weare from "../../image/we-are-sec.jpg";
import "./about.css";
import { Link } from "react-router-dom";
const About = ({ setShow }) => {
  setShow(true);
  return (
    <div>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"About"}
        title={"About us"}
      />
      <div className="about-content block">
        <h3 style={{ fontSize: "30px", textAlign: "center", padding: "10px" }}>
          MISSION FOR GREATNESS
        </h3>
        <p style={{ fontSize: "20px", padding: "10px" }}>
          Our, signs kind Moved were gathered. Living over herb of tree fowl,
          first hath, god years rule it bearing bring creeping. Bring light
          divided For morning give first saying every cattle place above spirit
          winged third it over you're hath set to for sea. Green likeness may
          fruit brought multiply divide together. Were morning our divided
          likeness fifth.
        </p>
      </div>
      <div className="about-we block">
        <div>
          <h1 style={{ padding: "10px", color: " rgb(24, 79, 104)" }}>
            WHO WE ARE
          </h1>
          <p style={{ padding: "10px", color: " rgb(24, 79, 104)" }}>
            Were. I stars years bearing. Two fruitful. Good yielding and was
            doesn't waters blessed over so behold every midst living. The the
            made subdue face beginning abundantly sea, saw don't. Behold and his
            heaven together set multiply won't appear kind fourth the firmament
            he you're which herb. Good there had may itself called heaven you
            night. Sea. That darkness spirit, him earth itself beast bring
            abundantly there man night also waters light moving us heaven
            divided land meat green have darkness life very very replenish won't
            above forth his very rule own great.
          </p>
          <div className="introgrid">
            <div style={{ alignItem: "center" }}>
              <span
                style={{ padding: "10px", fontSize: "50px", color: "aqua" }}
              >
                <FaBed />
              </span>
              <p style={{ color: "red", fontSize: "2rem" }}>800+</p>
              <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
                Beds
              </p>
            </div>
            <div style={{ alignItems: "center" }}>
              <span
                style={{ padding: "10px", fontSize: "50px", color: "aqua" }}
              >
                <FaIdCard />
              </span>
              <p style={{ color: "red", fontSize: "2rem" }}>1200+</p>
              <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
                Team Members
              </p>
            </div>
            <div style={{ alignItems: "center" }}>
              <span
                style={{ padding: "10px", fontSize: "50px", color: "aqua" }}
              >
                <FaUserMd />
              </span>
              <p style={{ color: "red", fontSize: "2rem" }}>550+</p>
              <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
                Doctors
              </p>
            </div>
            <div style={{ alignItems: "center" }}>
              <span
                style={{ padding: "10px", fontSize: "50px", color: "aqua" }}
              >
                <FaHandPaper />
              </span>
              <p style={{ color: "red", fontSize: "2rem" }}>600+</p>
              <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
                Volunteers
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={weare} alt="" className="about-img" />
        </div>
      </div>
      <div
        style={{
          background: "#00bcbd",
          padding: "50px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div className="block" style={{ marginBlock: "0px" }}>
          <h2 style={{ padding: "10px", marginInline: "auto" }}>
            HIGH-CLASS SPECIALISTS ARE READY TO HELP YOU AT ANY TIME.
          </h2>
          <p
            style={{
              padding: "20px",
              fontSize: "18px",
              marginInline: "10px",
            }}
          >
            Contact us any suitable way and make an appointment with the doctor
            whose help you need! Visit us at the scheduled time and get your
            treatment.
          </p>
          <Link to="/contact" className="about-btn">
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
      <div className="about-our-goal block">
        <img src={ourgoal} alt="" />
        <div>
          <h1 style={{ padding: "20px" }}>OUR GOAL</h1>
          <p style={{ padding: "20px" }}>
            Were. I stars years bearing. Two fruitful. Good yielding and was
            doesn't waters blessed over so behold every midst living. The the
            made subdue face beginning abundantly sea, saw don't. Behold and his
            heaven together set multiply won't appear kind fourth the firmament
            he you're which herb. Good there had may itself called heaven you
            night.
          </p>
          <p style={{ padding: "20px", paddingTop: "0" }}>
            Sea. That darkness spirit, him earth itself beast bring abundantly
            there man night also waters light moving us heaven divided land meat
            green have darkness life very very replenish won't above forth his
            very rule own great.
          </p>
          <div className="about-our-blog">
            <FaQuoteLeft fontSize={"55px"} />
            <p
              style={{
                fontFamily: "Open sans",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <em>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                molestiae dolorem quam in asperiores similique, corporis saepe
                quis nesciunt at distinctio earum excepturi aut necessitatibus?
                Ab qui maxime suscipit eaque et quas, vero cupiditate facere
                repellendus enim id ea neque.
              </em>
            </p>
          </div>
        </div>
      </div>
      <Experts />
    </div>
  );
};

export default About;
