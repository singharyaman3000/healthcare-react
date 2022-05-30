import React from "react";
import "../index.css";
const Search = ({ title, content, placeholder }) => {
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
          <input
            type="text"
            name="name"
            placeholder={placeholder}
            required
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <button
            style={{
              background: "#f84d4f",
              //   display: "inline-block",
              color: "#fff",
              border: "none",
              padding: "10px",
              textTransform: "uppercase",
              borderRadius: "5px",
            }}
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
