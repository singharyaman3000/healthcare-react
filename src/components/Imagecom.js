import React from "react";
import { Link } from "react-router-dom";
const Imagecom = ({ image, path, content, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" style={{ minHeight: "30vh" }} />
      <div className="maintext">
        <div style={{ fontFamily: "open sans,sans-serif" }}>
          {path.map((p, index) => (
            <div key={index}>
              <Link to={`/${p.link}`}>{p.text}</Link> /{" "}
            </div>
          ))}
          <span style={{ color: "#00bcbd" }}>{content}</span>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Imagecom;
