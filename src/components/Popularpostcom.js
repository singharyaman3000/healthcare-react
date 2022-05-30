import React from "react";
import { Link } from "react-router-dom";
import "../pages/Blog/blog.css";
const Popularpostcom = ({ posts }) => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div>
      {posts.map((post) => {
        return (
          <div style={{ display: "flex", margin: "10px", marginLeft: "0px" }}>
            <div style={{ paddingInline: "20px" }}>
              <img src={post.img} alt="" style={{ borderRadius: "5px" }} />
            </div>
            <div>
              <h5>
                <Link to="/blog-detail" onClick={scroll} className="posttitle">
                  {post.title}
                </Link>
              </h5>
              <p>{post.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popularpostcom;
