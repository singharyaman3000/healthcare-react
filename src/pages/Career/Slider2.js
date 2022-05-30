import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider2.css";
import { FaQuoteLeft } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
const Slider2 = () => {
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
    <div className="slider2">
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
        infinite={true}
      >
        <div className="slider2grid">
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                JOHN DOE -{" "}
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
          </div>
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                NINA THOMAS -{" "}
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
          </div>
        </div>
        <div className="slider2grid">
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                JOHN DOE -{" "}
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
          </div>
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                NINA THOMAS -{" "}
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
          </div>
        </div>
        <div className="slider2grid">
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                JOHN DOE -{" "}
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
          </div>
          <div style={{ background: "#00bcbd", padding: "20px" }}>
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
                marginTop: "-18px",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              <GoTriangleDown />
              <div>
                NINA THOMAS -{" "}
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
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider2;
