import React from "react";
import "./Healthblog.css";
import blog1 from "../../image/blog-1.jpg";
import blog2 from "../../image/blog-2.jpg";
import blog3 from "../../image/blog-3.jpg";
import { Link } from "react-router-dom";
const Healthblog = () => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="hblog block">
      <h1 style={{ textAlign: "center", fontSize: "45px", padding: "10px" }}>
        A HEALTHCARE BLOG
      </h1>
      <p style={{ textAlign: "center", fontSize: "25px", padding: "10px" }}>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <div className="mainblog">
        <div className="blog">
          <img src={blog1} alt="" />
          <div>FROM FOWL MOVING NIGHT OUR WHEREIN HERB SEED</div>
          <p>Sept 03, 2019</p>
        </div>
        <div className="blog">
          <img src={blog2} alt="" />
          <div>MORNING FORTH THERE HIM GREAT DARKER LIGHTS</div>
          <p>Sept 03, 2019</p>
        </div>
        <div className="blog">
          <img src={blog3} alt="" />
          <div>ABOVE DARKNESS LIGHTS DAY BLESSED THIRD FOR IMAGE</div>
          <p>Sept 03, 2019</p>
        </div>
      </div>
      <div className="bbtn">
        <Link to="/blog" onClick={scroll}>
          SEE ALL HEALTHCARE BLOG
        </Link>
      </div>
    </div>
  );
};

export default Healthblog;
