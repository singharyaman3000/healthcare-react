import React, { useState } from "react";
import "./Video.css";
import videoicon from "../../image/videoicon.png";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaTimesCircle } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
const Video = () => {
  const [point, setPoint] = useState(false);
  return (
    <div className="udiv block">
      <div className={`video ${point}`}>
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/xcJtL7QggTI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <span
          onClick={() => {
            setPoint(!point);
          }}
        >
          <FaTimesCircle />
        </span>
      </div>
      <div className="vimage">
        <div className="videosub">
          WATCH HEALTHCARE VIDEO
          <img
            onClick={() => {
              setPoint(!point);
            }}
            src={videoicon}
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="quote">
        <h2 style={{ color: "#fff", fontSize: "44px", padding: "10px" }}>
          WHY OUR PATIENTS CHOOSE HEALTHCARE
        </h2>
        <fieldset>
          <legend>
            <FaQuoteLeft />
          </legend>
          <p
            style={{
              fontFamily: "Open sans",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            molestiae dolorem quam in asperiores similique, corporis saepe quis
            nesciunt at distinctio earum excepturi aut necessitatibus? Ab qui
            maxime suscipit eaque et quas, vero cupiditate facere repellendus
            enim id ea neque.
          </p>
        </fieldset>
        <div
          style={{
            marginLeft: "55px",
            marginTop: "-15px",
            fontSize: "30px",
            color: "#fff",
          }}
        >
          <GoTriangleDown />
          <div>
            john doe -{" "}
            <span
              style={{
                fontFamily: "Open sans",
                fontSize: "23px",
              }}
            >
              satisfied patient
            </span>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            // textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <button
            style={{
              display: "inline-block",
              color: "#fff",
              border: "none",
              background: "none",
              fontSize: "30px",
              letterSpacing: "30px",
            }}
          >
            ---
          </button> */}
          <div
            style={{
              border: "2px solid white",
              width: "25px",
              background: "white",
              textAlign: "center",
            }}
          ></div>
          <div
            style={{
              border: "2px solid white",
              width: "25px",
              background: "white",
              textAlign: "center",
              marginInline: "5px",
            }}
          ></div>
          <div
            style={{
              border: "2px solid white",
              width: "25px",
              background: "white",
              textAlign: "center",
            }}
          ></div>
        </div>
        <div style={{ textAlign: "end", color: "#fff" }}>
          <Link to="/" className="a">
            VIEW ALL TESTIMONIALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
