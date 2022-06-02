import React from "react";
import { Link } from "react-router-dom";
const Imagecom = ({ image, path, content, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner image" style={{ minHeight: "30vh" }} />
      <div className="maintext">
        <p>
          {path.map((p) => (
            <>
              <Link to={`/${p.link}`}>{p.text}</Link> /{" "}
            </>
          ))}
          <span style={{ color: "#00bcbd" }}>{content}</span>
        </p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Imagecom;
