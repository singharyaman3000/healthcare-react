import React from "react";
import "./Experts.css";
import { Link } from "react-router-dom";
import member1 from "../../image/member-1.jpg";
import member2 from "../../image/member-2.jpg";
import member3 from "../../image/member-3.jpg";
const Experts = () => {
  return (
    <div className="expert block">
      <h1 style={{ textAlign: "center", fontSize: "40px", color: "#184f68" }}>
        MEET OUR EXPERTS
      </h1>
      <p style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <div className="slice">
        <div style={{ background: "#f1f8fc" }}>
          <img src={member1} alt="" className="img" />
          <div className="detail">
            <h2 style={{ color: "#184f68", fontSize: "30px", padding: "5px" }}>
              BERNICE RAY
            </h2>
            <p>Chief surgeon</p>
            <Link to="/">View profile</Link>
          </div>
        </div>
        <div style={{ background: "#f1f8fc" }}>
          <img src={member2} alt="" className="img" />
          <div className="detail">
            <h2 style={{ color: "#184f68", fontSize: "30px", padding: "5px" }}>
              LARISSA THOMAS
            </h2>
            <p>Otolaryngology</p>
            <Link to="/">View profile</Link>
          </div>
        </div>
        <div style={{ background: "#f1f8fc" }}>
          <img src={member3} alt="" className="img" />
          <div className="detail">
            <h2 style={{ color: "#184f68", fontSize: "30px", padding: "5px" }}>
              JASON BOLTON
            </h2>
            <p>Neurosurgery</p>
            <Link to="/">View profile</Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" className="link">
          meet our experts
        </Link>
      </div>
    </div>
  );
};

export default Experts;
