import React from "react";
import Imagecom from "../../components/Imagecom";
import { Link } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";
import banner from "../../image/carrer-banner.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import "./career.css";

const Careerdetail = () => {
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const handlefname = (fname) => {
    if (!fname) {
      return "First name should not be empty.";
    } else if (fname.match(/^[a-zA-Z]+$/) == null) {
      return "First name should only contain alphabets.";
    }
  };
  const handlelname = (lname) => {
    if (!lname) {
      return "last name should not be empty.";
    } else if (lname.match(/^[a-zA-Z]+$/) == null) {
      return "last name should only contain alphabets.";
    }
  };
  const handlemobile = (mobile) => {
    if (!mobile) return "please enter your phone number";
    else if (
      !mobile.match(/^[0-9]+$/) ||
      mobile.length !== 10 ||
      !mobile.match(/^[6789]/)
    )
      return "enter valid phone number";
  };
  const handleemail = (email) => {
    if (!email) {
      return "Please enter your email.";
    } else if (
      email.match(/\S+@\S+\.\S+/) == null ||
      email.match(/\S+@gmail.com/) == null
    ) {
      return "enter valid email";
    }
  };
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const validate = (e) => {
    e.preventDefault();
    if (handlefname(formdata.fname)) toast.warning(handlefname(formdata.fname));
    else if (handlelname(formdata.lname))
      toast.warning(handlelname(formdata.lname));
    else if (handleemail(formdata.email))
      toast.warning(handleemail(formdata.email));
    else if (handlemobile(formdata.mobile))
      toast.warning(handlemobile(formdata.mobile));
    else toast.success("success");
  };

  return (
    <div>
      <Imagecom
        image={banner}
        path={[
          { text: "home", link: "" },
          { text: "career", link: "career" },
        ]}
        content={"Technical Ambassador"}
        title={""}
      />
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
        <form action="#" autoComplete="off" noValidate onSubmit={validate}>
          <div
            style={{ background: "#f84d4f", color: "#fff", padding: "30px" }}
            className="formcareer"
          >
            <h3 style={{ fontSize: "30px" }}>Apply to Job</h3>
            <label htmlFor="fname">First Name*</label>
            <input
              type="text"
              id="fname"
              required
              name="fname"
              value={formdata.fname}
              onChange={handlechange}
            />
            <label htmlFor="lname">Last Name*</label>
            <input
              type="text"
              id="lname"
              required
              name="lname"
              value={formdata.lname}
              onChange={handlechange}
            />
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              value={formdata.email}
              onChange={handlechange}
            />
            <label htmlFor="cono">Contact Number*</label>
            <input
              type="text"
              id="cono"
              required
              name="mobile"
              value={formdata.mobile}
              onChange={handlechange}
            />
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
        </form>
      </div>
    </div>
  );
};

export default Careerdetail;
