import React, { useState } from "react";
import { toast } from "react-toastify";
import "../index.css";
const Search = ({ title, content, placeholder }) => {
  const [formdata, setFormdata] = useState({
    name: "",
  });
  const handletext = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleform = (e) => {
    e.preventDefault();
    if (!formdata.name) toast.warning("please enter search filed");
    else if (formdata.name.match(/^[a-zA-Z ]+$/) == null)
      toast.warning("please enter only alphabets");
  };
  return (
    <div
      className="block"
      style={{
        padding: "20px",
        background: "#fff",
        boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ background: "#fff" }}>
        <h6 style={{ fontSize: "20px", color: " rgb(24, 79, 104)" }}>
          {title}
        </h6>
        <p style={{ fontSize: "15px", color: " rgb(24, 79, 104)" }}>
          {content}
        </p>
        <div className="search">
          <form action="#" onSubmit={handleform} noValidate autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder={placeholder}
              required
              onChange={handletext}
              value={formdata.name}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <input
              type="submit"
              style={{
                background: "#f84d4f",
                //   display: "inline-block",
                color: "#fff",
                border: "none",
                padding: "10px",
                textTransform: "uppercase",
                borderRadius: "5px",
              }}
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
