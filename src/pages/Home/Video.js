import React, { useState } from "react";
import "./Video.css";
import "../Career/slider2.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import videoicon from "../../image/videoicon.png";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaTimesCircle } from "react-icons/fa";
// import { GoTriangleDown } from "react-icons/go";
const Video = () => {
  const [point, setPoint] = useState(false);
  const scroll = () => {
    window.scroll(0, 0);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      //   slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      //   slidesToSlide: 2,
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="udiv block">
      <div className={`video ${point}`}>
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/xcJtL7QggTI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
            style={{
              cursor: "pointer",
              width: "auto",
              animation: "videobtnanimation 1.4s infinite",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div className="quote">
        <h2 style={{ color: "#fff", fontSize: "44px", padding: "10px" }}>
          WHY OUR PATIENTS CHOOSE HEALTHCARE
        </h2>
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          infinite={true}
        >
          <div style={{ background: "#00bcbd" }}>
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
                molestiae dolorem quam in asperiores similique, corporis saepe
                quis nesciunt at distinctio earum excepturi aut necessitatibus?
                Ab qui maxime suscipit eaque et quas, vero cupiditate facere
                repellendus enim id ea neque.
              </p>
            </fieldset>
            <div
              style={{
                marginLeft: "55px",
                paddingBottom: "20px",
                // marginTop: "-18px",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {/* <GoTriangleDown /> */}
              <div>
                JOHN DOE -{" "}
                <span
                  style={{
                    fontFamily: "Open sans",
                    fontSize: "15px",
                  }}
                >
                  satisfied patient
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#00bcbd" }}>
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
                molestiae dolorem quam in asperiores similique, corporis saepe
                quis nesciunt at distinctio earum excepturi aut necessitatibus?
                Ab qui maxime suscipit eaque et quas, vero cupiditate facere
                repellendus enim id ea neque.
              </p>
            </fieldset>
            <div
              style={{
                marginLeft: "55px",
                paddingBottom: "20px",
                // marginTop: "-18px",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {/* <GoTriangleDown /> */}
              <div>
                NINA THOMAS -{" "}
                <span
                  style={{
                    fontFamily: "Open sans",
                    fontSize: "15px",
                  }}
                >
                  satisfied patient
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#00bcbd" }}>
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
                molestiae dolorem quam in asperiores similique, corporis saepe
                quis nesciunt at distinctio earum excepturi aut necessitatibus?
                Ab qui maxime suscipit eaque et quas, vero cupiditate facere
                repellendus enim id ea neque.
              </p>
            </fieldset>
            <div
              style={{
                marginLeft: "55px",
                paddingBottom: "20px",
                // marginTop: "-18px",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {/* <GoTriangleDown /> */}
              <div>
                NINA THOMAS -{" "}
                <span
                  style={{
                    fontFamily: "Open sans",
                    fontSize: "15px",
                  }}
                >
                  satisfied patient
                </span>
              </div>
            </div>
          </div>
        </Carousel>
        <div style={{ textAlign: "end", color: "#fff", margin: "20px" }}>
          <Link to="/testimonial" onClick={scroll} className="a">
            VIEW ALL TESTIMONIALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
