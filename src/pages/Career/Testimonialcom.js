import React from "react";
import "./career.css";
const Testimonialcom = ({ testimonial }) => {
  return (
    <div className="testblog block">
      {testimonial.map((test, index) => {
        return (
          <div
            key={index}
            style={{ boxShadow: "0 0 10px #0005" }}
            className="test2"
          >
            <p
              style={{
                color: "#184f68",
                padding: "5px",
                fontSize: "18px",
              }}
            >
              {/* <FaQuoteLeft style={{ color: "#00bcbd", fontSize: "25px" }} /> */}
              {test.content}
            </p>
            <div
              style={{ color: "#00bcbd", padding: "10px", fontSize: "20px" }}
            >
              {test.name} - Satisfied Patient
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonialcom;
