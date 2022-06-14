import React from "react";
import logo from "../../image/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
// import user from "./user";
import "./Login.css";
import { toast } from "react-toastify";
const Login = ({ setIsLogin }) => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  // const [users, setUsers] = useState({});
  const user = JSON.parse(localStorage.getItem("users")) || [];
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
    if (handleemail(formdata.email)) toast.warning(handleemail(formdata.email));
    else if (!formdata.password) toast.warning("please enter password.");
    else {
      const newUser = user.find(
        (u) => u.email === formdata.email && u.password === formdata.password
      );
      if (newUser) {
        localStorage.setItem("currentuser", JSON.stringify(newUser));
        // setUsers(newUser);
        setIsLogin(true);
        toast.success("success");
      } else {
        toast.warning("invalid email and password");
      }
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
        <h2>
          <img
            src={logo}
            alt=""
            style={{ width: "35%", height: "35%", marginLeft: "5%" }}
          />
        </h2>
        <form action="#" className="loginform" onSubmit={validate}>
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
              marginTop: "2%",
            }}
          >
            <button>Login</button>
            <Link to="/signup">
              <button>SignUp</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
