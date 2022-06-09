import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Form.css";
const Form = () => {
  const [formdata, setFormdata] = useState({
    fname: "",
    email: "",
    service: "",
    date: "",
  });
  const handlename = (fname) => {
    if (!fname) {
      return "First name should not be empty.";
    } else if (fname.match(/^[a-zA-Z ]+$/) == null) {
      return "First name should only contain alphabets.";
    }
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
    console.log("abhay");
    if (handlename(formdata.fname)) toast.warning(handlename(formdata.fname));
    else if (handleemail(formdata.email))
      toast.warning(handleemail(formdata.email));
    else if (!formdata.service) toast.warning("Please choose service");
    else if (!formdata.date) toast.warning("please select the date");
  };
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
        <form
          className="form"
          name="registration"
          action="#"
          onSubmit={validate}
          noValidate
          autoComplete="off"
        >
          <input
            required
            type="text"
            name="fname"
            id="fname"
            value={formdata.fname}
            placeholder="your name*"
            onChange={handlechange}
          />
          <input
            required
            type="text"
            placeholder="your email*"
            name="email"
            onChange={handlechange}
            value={formdata.email}
          />
          <select
            name="service"
            id="service"
            style={{ padding: "20px", margin: "0px" }}
            onChange={handlechange}
            value={formdata.service}
            // onChange={handleservice}
          >
            <option value="null">select service</option>
            <option value="emergency-care">Emergency Care</option>
            <option value="neurology">Neurology</option>
            <option value="pediatry">Padiatry</option>
            <option value="cardiology">Cardilogy</option>
            <option value="dentisty">Dentisty</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            onChange={handlechange}
            value={formdata.date}
          />
          <div></div>
          <input type="submit" value="book appointment" className="btneffect" />
        </form>
      </div>
    </div>
  );
};

export default Form;
