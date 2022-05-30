import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import tooth from "../../image/tooth.png";
import bone from "../../image/bone.png";
import heartbeat from "../../image/heartbeat.png";
import brain from "../../image/brain.png";
import stethoscope from "../../image/stethoscope.png";
import healthcare from "../../image/healthcare.png";
const Typeofservice = () => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div style={{ background: "#00bcbd", width: "100%" }}>
      <div className="mainservice block">
        <div className="first">
          <h2
            style={{
              fontSize: "40px",
              textTransform: "uppercase",
              fontWeight: "bolder",
              alignItems: "center",
            }}
          >
            HEALTHCARE YOU CAN TRUST
          </h2>
          <p
            style={{
              margin: "20px 0",
              fontSize: "20px",
              fontFamily: "Open sans",
            }}
          >
            Behold divided behold. In fly. Doesn't you'll heaven subdue creepeth
            air him divide give days image over called. Without him, night above
            subdue you'll let under multiply let firmament void that had don't
            called living it signs it, god. Gathered years multiply that that
            days signs void creepeth Together in face for he can't us. Seas air
            beast behold creature itself herb place, days.
          </p>
          <Link to="/Service" onClick={scroll} className="btn">
            see all services
          </Link>
        </div>
        <div className="iconblock">
          <div className="icon">
            <Link to="/service">
              <img src={healthcare} alt="" className="png" />
              <p className="iconsub">Emergency care</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/service">
              <img src={brain} alt="" className="png" />
              <p className="iconsub">Neurology</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/service">
              <img src={stethoscope} alt="" className="png" />
              <p className="iconsub">Pedistry</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/service">
              <img src={heartbeat} alt="" className="png" />
              <p className="iconsub">Cardiology</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/service">
              <img src={tooth} alt="" className="png" />
              <p className="iconsub">dentistry</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/service">
              <img src={bone} alt="" className="png" />
              <p className="iconsub">Orthopedics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typeofservice;
