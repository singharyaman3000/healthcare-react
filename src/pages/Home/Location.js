import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";
const Location = () => {
  return (
    <div className="block">
      <div className="bglocation">
        <div className="bgtext">
          <h2 style={{ fontSize: "35px" }}>
            FIND A HEALTHCARE FACILITIES{" "}
            <div style={{ fontSize: "40px" }}>NEAR YOU</div>
          </h2>
          <div className="hlink">
            <Link to="/">HEALTHCARE LOCATIONS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
