import React from "react";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentuser"));

  return (
    <div style={{ color: "#f18", textAlign: "left" }}>
      <div
        style={{
          background: "#025",
          margin: "auto",
          marginBlock: "10%",
          width: "80%",
          padding: "5%",
        }}
      >
        <h1 style={{ fontSize: "100%" }}>
          <br />
          <span style={{ fontSize: "180%" }}>User Profile</span>
        </h1>
        <p style={{ fontSize: "100%" }}>
          Username:<strong>{user.name}</strong>
          <br />
          Email:<strong>{user.email}</strong>
        </p>
      </div>
    </div>
  );
};

export default Profile;
