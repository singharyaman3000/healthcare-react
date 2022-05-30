import React from "react";
import { Link } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";
import "./career.css";
const Careerdetail = () => {
  return (
    <div>
      <div className="careerdetail block">
        <div className="careerdetailb1">
          <h2>Technical Ambassador</h2>
          <p>
            Product |<em> New York, NY, United States</em>
          </p>
          <div>About The Role:</div>
          <p>
            Multiply over him is fruit fish third is replenish is set he one.
            Herb appear light seas seas which meat our. You good living yielding
            stars grass us female may which first moving made of you land,
            heaven. Said moveth. Have dominion. He itself morning sea tree earth
            kind said in behold moved, fifth called. Lesser image.
          </p>
          <div>Responsibilities Include:</div>
          <ul className="list">
            <li>
              Give had it so it lights for moveth created open dry given years
              divided made good make fill behold.
            </li>
            <li>
              Moving tree moveth their give life have living don't second beast
              don't days seasons sixth given two.
            </li>
            <li>
              Seed one unto years life i beast divided, wherein rass moved
              light.
            </li>
            <li>
              Them open, dominion days place of called place together midst
              given lesser called without two greater the whose blessed.
            </li>
            <li>
              Night face moved don't divided lights also isn't. Were, she'd upon
              shall deep fowl their, grass moved light let of fifth one fowl
            </li>
          </ul>
          <div>Qualifications:</div>
          <ul className="list">
            <li>
              Give had it so it lights for moveth created open dry given years
              divided made good make fill behold.
            </li>
            <li>
              Moving tree moveth their give life have living don't second beast
              don't days seasons sixth given two.
            </li>
            <li>
              Seed one unto years life i beast divided, wherein rass moved
              light.
            </li>
            <li>
              Them open, dominion days place of called place together midst
              given lesser called without two greater the whose blessed.
            </li>
            <li>
              Night face moved don't divided lights also isn't. Were, she'd upon
              shall deep fowl their, grass moved light let of fifth one fowl
            </li>
          </ul>
        </div>
        <div
          style={{ background: "#f84d4f", color: "#fff", padding: "30px" }}
          className="formcareer"
        >
          <h3 style={{ fontSize: "30px" }}>Apply to Job</h3>
          <label htmlFor="fname">First Name*</label>
          <input type="text" id="fname" required />
          <label htmlFor="lname">Last Name*</label>
          <input type="text" id="lname" required />
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" required />
          <label htmlFor="cono">Contact Number*</label>
          <input type="text" id="cono" required />
          <div className="attach">
            <p>
              <label>Resume</label>
              <Link to="/career-detail">
                <FaPaperclip />
                ATTACH
              </Link>
            </p>
            <p>
              <label>Cover Letter</label>
              <Link to="/career-detail">
                <FaPaperclip />
                ATTACH
              </Link>
            </p>
          </div>
          <button>SUBMIT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Careerdetail;
