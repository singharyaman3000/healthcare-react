import React, { useState } from "react";
import { toast } from "react-toastify";

const Formservice = () => {
  const [formdata, setFormdata] = useState({
    fname: "",
    email: "",
    date: "",
    service: "",
  });
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleform = (e) => {
    e.preventDefault();
    if (handlename(formdata.fname)) toast.warning(handlename(formdata.fname));
    else if (handleemail(formdata.email))
      toast.warning(handleemail(formdata.email));
    else if (!formdata.service) toast.warning("plaese choose service");
    else if (!formdata.date) toast.warning("plaese select the date");
  };
  const handlename = (fname) => {
    if (!fname) {
      return "please write name";
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
          <form action="#" onSubmit={handleform} noValidate autoComplete="off">
            <div className="serform1">
              <input
                required
                type="text"
                name="fname"
                id="fname"
                placeholder="your name*"
                onChange={handlechange}
                value={formdata.fname}
              />
              <input
                required
                type="text"
                name="email"
                placeholder="your email*"
                onChange={handlechange}
                value={formdata.email}
              />

              <select
                name="service"
                id="service"
                style={{ color: "#fff", fontSize: "18px" }}
                onChange={handlechange}
                value={formdata.service}
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
                required
                type="date"
                name="date"
                id="date"
                style={{ color: "#fff", fontSize: "18px" }}
                onChange={handlechange}
                value={formdata.date}
              />
            </div>
            <input type="submit" value="book appointment" className="sbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formservice;
