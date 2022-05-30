import React from "react";

const Formservice = () => {
  return (
    <div className="bgform">
      <div className="block serform">
        <h3
          style={{
            fontSize: "40px",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          make an appointment
        </h3>
        <div>
          <form action="#">
            <div className="serform1">
              <input
                required
                type="text"
                name="fname"
                id="fname"
                placeholder="your name*"
              />
              <input required type="text" placeholder="your email*" />

              <select
                name="service"
                id="service"
                style={{ color: "#fff", fontSize: "18px" }}
              >
                <option value="select service">select service</option>
              </select>
              <input
                required
                type="date"
                name="date"
                id="date"
                style={{ color: "#fff", fontSize: "18px" }}
              />
            </div>
            <input type="button" value="book appointment" className="sbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formservice;
