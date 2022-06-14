import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import user from "./user";

// import "./signup.css";
const SignUp = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(
    () => localStorage.setItem("users", JSON.stringify(users)),
    [users]
  );

  const handlename = (name) => {
    if (!name) {
      return "Name should not be empty.";
    } else if (name.match(/^[a-zA-Z ]+$/) == null) {
      return "Name should only contain alphabets.";
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
    if (handlename(formdata.name)) toast.warning(handlename(formdata.name));
    else if (handleemail(formdata.email))
      toast.warning(handleemail(formdata.email));
    else if (!formdata.password) toast.warning("please enter password.");
    else {
      setUsers([...users, formdata]);
      toast.success("data register");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justfyContent: "center",
        alignItems: "center",
        minHeight: "96vh",
        // background: "linear-gradient(#70b, #000)",
        background:
          "linear-gradient(to right bottom, #120537, #003f7f, #0079ad, #00b4ae, #12eb8b)",
      }}
    >
      <div className="login">
        <h2
          style={{
            textAlign: "center",
            margin: "10px",
            fontSize: "2rem",
            color: "#414868",
          }}
        >
          Registration
        </h2>
        <form action="#" className="loginform" onSubmit={validate}>
          <label htmlFor="name">Your Name*</label>
          <input
            type="name"
            name="name"
            id="name"
            onChange={handlechange}
            value={formdata.name}
          />
          <label htmlFor="email">Your Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handlechange}
            value={formdata.email}
          />
          <label htmlFor="Password">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlechange}
            value={formdata.password}
          />
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button>Registration</button>
            <Link to="/">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
