import React from "react";
import { Link } from "react-router-dom";
import "./career.css";
const Positioncom = ({ positions }) => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="gridpositions">
      {positions.map((position, index) => {
        return (
          <div key={index} className="positiongrid">
            <div>
              <h3
                style={{
                  color: "#184f68",
                  fontSize: "20px",
                }}
              >
                {position.position}
              </h3>
              <p>Full Time - San Francisco</p>
            </div>
            <Link to="/career-detail" onClick={scroll} className="positionbtn">
              APPLY NOW
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Positioncom;
