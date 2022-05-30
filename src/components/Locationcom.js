import React from "react";
import "./Locationcom.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Locationcom = ({ Locations }) => {
  return (
    <div>
      {Locations.map((location) => {
        return (
          <div>
            <hr />
            <div className="location-grid">
              <div style={{ paddingBlock: "10px" }} className="grid1">
                <h3
                  style={{
                    color: "#00bcbd",
                    fontSize: "25px",
                    paddingBlock: "10px",
                  }}
                >
                  {location.title}
                </h3>
                <p
                  style={{
                    color: "#214e66",
                    fontSize: "20px",
                    paddingBlock: "10px",
                  }}
                >
                  <FaPhoneAlt /> {location.location}
                </p>
                <p
                  style={{
                    color: "#214e66",
                    fontSize: "20px",
                    paddingBlock: "10px",
                  }}
                >
                  <FaMapMarkerAlt /> {location.phoneno}
                </p>
                <button
                  className="location-btn"
                  onClick={() => {
                    window.open(location.link, " _blank");
                  }}
                >
                  GET DIRECTIONS
                </button>
              </div>
              {location.map}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Locationcom;
