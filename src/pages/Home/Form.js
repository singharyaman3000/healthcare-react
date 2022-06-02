import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="maindiv block">
      <div className="subdiv1">
        <div className="subdiv">
          <h3>make an appointment</h3>
          <hr style={{ width: "100px", height: "2px", background: "#fff" }} />
        </div>
        <div className="font">
          <p>a specialist will contact you shortly</p>
        </div>
      </div>
      <div className="form1">
        <form className="form" action="#">
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
            style={{ padding: "20px", margin: "0px" }}
          >
            <option value="select service">select service</option>
          </select>
          <input type="date" />

          <div></div>

          <input type="button" value="book appointment" className="btneffect" />
        </form>
      </div>
    </div>
  );
};

export default Form;
